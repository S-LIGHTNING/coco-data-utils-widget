import { addCheck, addThisForMethods, exportWidget, getSuperWidget, transformMethodsCallbackFunctionsToCodeBlocks, transformMethodsCallbackFunctionsToEvents, transformMutator, Types } from "slightning-coco-widget"
import packageInfo from "../package.json"

import * as Basic from "./basic"
import * as Number from "./number"
import * as String from "./string"
import * as Boolean from "./boolean"
import * as Array from "./array"
import * as Object from "./object"

const types: Types = {
    type: "SLIGHTNING_DATA_UTILS_WIDGET",
    info: {
        title: "数据工具",
        icon: "https://creation.bcmcdn.com/716/appcraft/IMAGE_4sf_5p-l3_1749192384667.svg",
        category: "工具",
        version: packageInfo.version
    },
    options: {
        visible: false,
        global: true
    },
    properties: [],
    methods: [{ blockOptions: {
        // icon: "https://creation.bcmcdn.com/716/appcraft/IMAGE_Gt05aT_ow_1749192404945.svg"
    }, contents: [
        Basic.types, Number.types, String.types, Boolean.types, Array.types, Object.types
    ]}],
    events: []
}

class DataUtilsWidget extends getSuperWidget(types) {}

window.Object.assign(DataUtilsWidget.prototype,
    Basic.methods, Number.methods, String.methods, Boolean.methods, Array.methods, Object.methods
)

exportWidget(types, DataUtilsWidget, {
    decorators: [
        {
            CoCo: transformMethodsCallbackFunctionsToEvents,
            CreationProject: transformMethodsCallbackFunctionsToCodeBlocks
        },
        addThisForMethods,
        addCheck,
        transformMutator
    ]
})
