const path = require("path")
const fs = require("fs")
const webpack = require("webpack")
const { merge } = require("webpack-merge")
const TerserPlugin = require("terser-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const SCW = require("slightning-coco-widget--webpack")
const VisualizerPlugin2 = require("webpack-visualizer-plugin2")

const packageInfo = require("./package.json")

/**
 * @param env {{ mode?: webpack.Configuration["mode"], platform?: string }}
 * @param __argv {any}
 * @returns {webpack.Configuration}
 */
module.exports = function (env, __argv) {
    /**
     * @type {NonNullable<webpack.Configuration["mode"]>}
     */
    const mode = env.mode ?? "none"
    const platform = env.platform
    /** @type {string[][]} */
    const commentsArray = []
    /** @type {string[]} */
    let comments = []
    /** @type {Record<string, string>} */
    const entry = {}
    /**
     * @param {string} dirPathname
     * @returns {void}
     */
    function recursiveAddEntryFiles(dirPathname) {
        for (const fileName of fs.readdirSync(path.resolve(__dirname, dirPathname))) {
            const filePathname = path.resolve(__dirname, dirPathname, fileName)
            if (fs.lstatSync(filePathname).isDirectory()) {
                recursiveAddEntryFiles(filePathname)
            } else if (/^index\.widget\.tsx?$/.test(fileName)) {
                const fileContent = String(fs.readFileSync(filePathname))
                const type = fileContent.match(/(?<=type: ").*(?=")/)?.[0]
                const name = fileContent.match(/(?<=title: ").*(?=")/)?.[0]
                if (type == null) {
                    throw new Error(`解析 ${path.relative(__dirname, filePathname)} 的 type 失败`)
                }
                if (name == null) {
                    throw new Error(`解析 ${path.relative(__dirname, filePathname)} 的 name 失败`)
                }
                commentsArray.push([
                    "==CoCoWidget==",
                    "@type " + type,
                    "@name " + name,
                    "@author " + packageInfo.author,
                    "@version " + packageInfo.version,
                    "@license " + packageInfo.license,
                    "==/CoCoWidget=="
                ])
                entry[`${name} v${packageInfo.version}${platform == null ? "" : "." + platform.toLowerCase()}.js`] = filePathname
                if (mode == "production") {
                    entry[`${name} v${packageInfo.version}${platform == null ? "" : "." + platform.toLowerCase()}.min.js`] = filePathname
                }
            }
        }
    }
    recursiveAddEntryFiles("./src")
    for (const commentsInCommentsArray of commentsArray) {
        comments.push(...commentsInCommentsArray)
    }
    comments = Array.from(new Set(comments))
    return merge(SCW.config, {
        mode,
        stats: "minimal",
        entry,
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: {
                development: "开发/[name].js",
                production: `[name]`,
                none: `[name] v${packageInfo.version}.js`
            }[mode],
            environment: { arrowFunction: false },
            iife: false
        },
        devServer: {
            static: false,
            allowedHosts: [
                "coco.codemao.cn",
                "cp.cocotais.cn"
            ],
            headers(incomingMessage) {
                /** @type {{ rawHeaders: string[] }} */
                const {rawHeaders} = incomingMessage
                const origin = rawHeaders[rawHeaders.findIndex((value) => {
                    return /origin/i.test(value)
                }) + 1]
                return {
                    "Access-Control-Allow-Origin": origin,
                    "Access-Control-Allow-Headers": "*",
                    "Access-Control-Allow-Methods": "GET"
                }
            },
            hot: false,
            liveReload: false
        },
        optimization: {
            minimizer: [
                new TerserPlugin({
                    include: /\.min\.js$/,
                    terserOptions: {
                        format: {
                            // @ts-ignore
                            comments: new Function(
                                "__node", "comment",
                                `return ${JSON.stringify(comments)}.some(item => comment.value.includes(item))`
                            )
                        }
                    },
                    extractComments: false
                })
            ]
        },
        devtool: mode == "development" ? "eval-source-map" : false,
        module: {
            rules: [
                ...(mode == "production" ? [{
                    test: /\.(t|j)sx?$/,
                    exclude: /node_modules/,
                    use: "babel-loader"
                }] : []), {
                    test: /\.(j|t)sx?$/,
                    use: {
                        loader: SCW.Loaders.ExternalImportLoader,
                        options: {
                            "@slightning/anything-to-string": "https://static.codemao.cn/pickduck/ryldSkpogg.js?hash=FnaGREYTgQFy9ZLnqsx0jkDePbb-"
                        }
                    }
                }, {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true
                        }
                    }
                }
            ]
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx"]
        },
        externalsType: "commonjs",
        externals: {
            "@slightning/anything-to-string": "@slightning/anything-to-string",
            lodash: "lodash"
        },
        plugins: [
            new ForkTsCheckerWebpackPlugin(),
            new webpack.ProgressPlugin(),
            new webpack.IgnorePlugin({
                resourceRegExp: /webpack-dev-server/,
            }),
            ...commentsArray.map((comments) =>
                new webpack.BannerPlugin({
                    test: new RegExp("(^|/)" + comments.find(comment => comment.includes("@name"))?.split(" ")[1]),
                    banner: comments.map(line => `// ${line}\n`).join(""),
                    raw: true,
                    entryOnly: true
                })
            ),
            new VisualizerPlugin2({
                filename: "./stats.html"
            })
        ]
    })
}
