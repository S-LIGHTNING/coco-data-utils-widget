import { ArrayType, MethodTypes, MutatorType } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "array__concatInline",
    label: "列表拼接单行",
    block: [
        "拼接", {
            key: "arrays",
            label: "列表",
            type: new MutatorType({
                block: [
                    {
                        key: "array",
                        label: "列表",
                        type: new ArrayType({
                            defaultValue: ["列表"]
                        })
                    }
                ],
                min: 2,
                transformMax: 5
            })
        }
    ],
    returns: new ArrayType()
}
