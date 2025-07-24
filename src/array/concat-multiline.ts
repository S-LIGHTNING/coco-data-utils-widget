import { AnyType, ArrayType, MethodBlockParam, MethodTypes, MutatorType } from "slightning-coco-widget"
import { concat } from "./concat"

export const types: MethodTypes = {
    key: "array__concatMultiline",
    label: "列表拼接多行",
    block: [
        "拼接", {
            key: "arrays",
            label: "列表",
            type: new MutatorType({
                block: [
                    MethodBlockParam.BREAK_LINE, {
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
    returns: new ArrayType(),
    blockOptions: {
        inline: false
    }
}

export const methods: Record<string, Function> = {
    array__concatMultiline: concat
}
