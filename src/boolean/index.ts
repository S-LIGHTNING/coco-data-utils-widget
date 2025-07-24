import { Color, MethodGroup } from "slightning-coco-widget"

import * as AndInlineV2 from "./and-inline-v2"
import * as AndInlineV1 from "./and-inline-v1"
import * as AndMultilineV2 from "./and-multiline-v2"
import * as AndMultilineV1 from "./and-multiline-v1"
import * as OrInlineV2 from "./or-inline-v2"
import * as OrInlineV1 from "./or-inline-v1"
import * as OrMultilineV2 from "./or-multiline-v2"
import * as OrMultilineV1 from "./or-multiline-v1"

export const types: MethodGroup = {
    label: "布尔",
    blockOptions: { color: Color.BROWN },
    contents: [
        { contents: [
            AndInlineV1.types, AndInlineV2.types, AndMultilineV2.types, AndMultilineV1.types,
            OrInlineV2.types, OrInlineV1.types, OrMultilineV2.types, OrMultilineV1.types
        ]}
    ]
}

export const methods: Record<string, Function> = Object.assign({},
    AndInlineV1.methods, AndInlineV2.methods, AndMultilineV2.methods, AndMultilineV1.methods,
    OrInlineV2.methods, OrInlineV1.methods, OrMultilineV2.methods, OrMultilineV1.methods
)
