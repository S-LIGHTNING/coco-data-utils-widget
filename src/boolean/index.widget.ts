import { addCheck, addThisForMethods, exportWidget, getSuperWidget, transformMutator, Types } from "slightning-coco-widget"
import packageInfo from "../../package.json"

import * as Index from "./index"
import { extractOldVersionMethods } from "../extract-old-version-methods"

const types: Types = {
    type: "SLIGHTNING_BOOLEAN_UTILS_WIDGET",
    info: {
        title: "布尔工具",
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

class BooleanUtilsWidget extends getSuperWidget(types) {}

Object.assign(BooleanUtilsWidget.prototype, Index.methods)

exportWidget(types, BooleanUtilsWidget, {
    decorators: [
        extractOldVersionMethods,
        addCheck,
        { "CoCo|CreationProject":  [
            transformMutator,
            addThisForMethods
        ]}
    ]
})
