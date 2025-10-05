import { addCheck, addThisForMethods, exportWidget, getSuperWidget, transformMethodsCallbackFunctionsToCodeBlocks, transformMethodsCallbackFunctionsToEvents, transformMutator, Types } from "slightning-coco-widget"
import packageInfo from "../package.json"

import * as Index from "./index"
import { extractOldVersionMethods } from "./utils/extract-old-version-methods"

const types: Types = {
    type: "SLIGHTNING_DATA_UTILS_WIDGET",
    info: {
        title: "数据工具",
        instanceTitle: "_",
        icon: "https://creation.bcmcdn.com/716/appcraft/IMAGE_4sf_5p-l3_1749192384667.svg",
        category: "工具",
        version: packageInfo.version,
        author: packageInfo.author,
        url: {
            homepage: "https://gitee.com/slightning/coco-data-utils-widget",
            docs: "https://gitee.com/slightning/coco-data-utils-widget",
            repository: "https://gitee.com/slightning/coco-data-utils-widget",
            bugReport: "https://gitee.com/slightning/coco-data-utils-widget/issues/new"
        }
    },
    options: { visible: false, global: true },
    properties: [],
    methods: [{ ...Index.types, label: null }],
    events: []
}

class DataUtilsWidget extends getSuperWidget(types) {}

global.Object.assign(DataUtilsWidget.prototype, Index.methods)

exportWidget(types, DataUtilsWidget, {
    decorators: [
        extractOldVersionMethods,
        {
            CoCo: transformMethodsCallbackFunctionsToEvents,
            CreationProject: transformMethodsCallbackFunctionsToCodeBlocks
        },
        addCheck,
        { "CoCo|CreationProject":  [
            transformMutator,
            addThisForMethods
        ]}
    ]
})
