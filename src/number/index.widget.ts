import { addCheck, addThisForMethods, exportWidget, getSuperWidget, transformMutator, Types } from "slightning-coco-widget"
import packageInfo from "../../package.json"

import * as Index from "./index"

const types: Types = {
    type: "SLIGHTNING_NUMBER_UTILS_WIDGET",
    info: {
        title: "数字工具",
        instanceTitle: "_",
        icon: "https://creation.bcmcdn.com/716/appcraft/IMAGE_H3wQ-d34ZS_1759627469118.svg",
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

class NumberUtilsWidget extends getSuperWidget(types) {}

Object.assign(NumberUtilsWidget.prototype, Index.methods)

exportWidget(types, NumberUtilsWidget, {
    decorators: [
        addCheck,
        { "CoCo|CreationProject":  [
            transformMutator,
            addThisForMethods
        ]}
    ]
})
