import { BooleanType, MethodTypes, MutatorType } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "boolean__orInline_v2",
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
                separators: ["或"],
                min: 2,
                transformMax: 5
            })
        }
    ],
    returns: new BooleanType()
}
