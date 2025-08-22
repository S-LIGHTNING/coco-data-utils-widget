const path = require("path")
const fs = require("fs")
const webpack = require("webpack")
const { merge } = require("webpack-merge")
const TerserPlugin = require("terser-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const SCW = require("slightning-coco-widget--webpack")
const package = require("./package.json")

/**
 * @returns {webpack.Configuration}
 */
module.exports = function (env, __argv) {
    /**
     * @type {NonNullable<webpack.Configuration["mode"]>}
     */
    const mode = env.mode ?? "none"
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
                    "@author " + package.author,
                    "@version " + package.version,
                    "@license " + package.license,
                    "==/CoCoWidget=="
                ])
                entry[name] = filePathname
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
                production: `[name] v${package.version}.min.js`,
                none: `[name] v${package.version}.js`
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
                    include: /\.min\.js/,
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
            )
        ]
    })
}
