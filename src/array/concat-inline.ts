import { AnyType, ArrayType, MethodTypes, MutatorType } from "slightning-coco-widget"
import { concat } from "./concat"

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
                            itemType: new AnyType(),
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

export const methods: Record<string, Function> = {
    array__concatInline: concat
}
