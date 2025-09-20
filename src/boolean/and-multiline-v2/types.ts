import { BooleanType, MethodBlockParam, MethodTypes, MutatorType } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "boolean__andMultiline_v2",
    label: "布尔且",
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
                separators: [MethodBlockParam.BREAK_LINE, "且"],
                min: 2,
                transformMax: 5
            })
        }
    ],
    returns: new BooleanType(),
    blockOptions: { inline: false }
}
