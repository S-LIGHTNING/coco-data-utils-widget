import { BooleanType, MethodBlockParam, MethodTypes, MutatorType } from "slightning-coco-widget"
import { orV2 } from "./or"

export const types: MethodTypes = {
    key: "boolean__orMultiline_v2",
    label: "布尔或",
    block: [
        {
            key: "booleans",
            label: "布尔值",
            type: new MutatorType({
                block: [
                    {
                        key: "boolean",
                        label: "布尔值",
                        type: new BooleanType(true)
                    }
                ],
                separators: [MethodBlockParam.BREAK_LINE, "或"],
                min: 2,
                transformMax: 5
            })
        }
    ],
    returns: new BooleanType(),
    blockOptions: { inline: false }
}

export const methods: Record<string, Function> = {
    boolean__orMultiline_v2: orV2
}
