import { addCheck, addThisForMethods, exportWidget, getSuperWidget, Types } from "slightning-coco-widget"
import packageInfo from "../../package.json"

import * as Index from "./index"

const types: Types = {
    type: "SLIGHTNING_STRING_UTILS_WIDGET",
    info: {
        title: "字符串工具",
        icon: "https://creation.bcmcdn.com/716/appcraft/IMAGE_4sf_5p-l3_1749192384667.svg",
        category: "数据",
        version: packageInfo.version,
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

class StringUtilsWidget extends getSuperWidget(types) {}

Object.assign(StringUtilsWidget.prototype, Index.methods)

exportWidget(types, StringUtilsWidget, {
    decorators: [
        { "CoCo|CreationProject":  addThisForMethods },
        addCheck
    ]
})
