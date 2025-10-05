import { addCheck, addThisForMethods, exportWidget, getSuperWidget, transformMutator, Types } from "slightning-coco-widget"
import packageInfo from "../../package.json"

import * as Index from "./index"
import { extractOldVersionMethods } from "../utils/extract-old-version-methods"

const types: Types = {
    type: "SLIGHTNING_OBJECT_UTILS_WIDGET",
    info: {
        title: "字典工具",
        instanceTitle: "_",
        icon: "https://creation.bcmcdn.com/716/appcraft/IMAGE_S6yNEHkv2_1759627469107.svg",
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

class ObjectUtilsWidget extends getSuperWidget(types) {}

Object.assign(ObjectUtilsWidget.prototype, Index.methods)

exportWidget(types, ObjectUtilsWidget, {
    decorators: [
        extractOldVersionMethods,
        addCheck,
        { "CoCo|CreationProject":  [
            transformMutator,
            addThisForMethods
        ]}
    ]
})
