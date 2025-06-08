import { AnyType, ArrayType, MethodTypes, MutatorType } from "slightning-coco-widget"
import { concat } from "./concat"

export const types: MethodTypes = {
    key: "array__concatMultiline",
    label: "拼接",
    block: [
        {
            key: "arrays",
            label: "列表",
            type: new MutatorType({
                block: [
                    {
                        key: "array",
                        label: "",
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
    returns: new ArrayType(),
    blockOptions: {
        inline: false
    }
}

export const methods: Record<string, Function> = {
    array__concatMultiline: concat
}
