import { addCheck, addThisForMethods, exportWidget, getSuperWidget, transformMutator, Types } from "slightning-coco-widget"
import packageInfo from "../../package.json"

import * as Index from "./index"

const types: Types = {
    type: "SLIGHTNING_OBJECT_UTILS_WIDGET",
    info: {
        title: "字典工具",
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

class ObjectUtilsWidget extends getSuperWidget(types) {}

Object.assign(ObjectUtilsWidget.prototype, Index.methods)

exportWidget(types, ObjectUtilsWidget, {
    decorators: [
        addCheck,
        { "CoCo|CreationProject":  [
            transformMutator,
            addThisForMethods
        ]}
    ]
})
