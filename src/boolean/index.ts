import { Color, MethodGroup } from "slightning-coco-widget"

import * as AndInline from "./and-inline"
import * as AndMultiline from "./and-multiline"
import * as OrInline from "./or-inline"
import * as OrMultiline from "./or-multiline"

export const types: MethodGroup = {
    label: "布尔",
    blockOptions: { color: Color.BROWN },
    contents: [
        { contents: [AndInline.types, AndMultiline.types, OrInline.types, OrMultiline.types] }
    ]
}

export const methods: Record<string, Function> = Object.assign({},
    AndInline.methods, AndMultiline.methods, OrInline.methods, OrMultiline.methods
)
