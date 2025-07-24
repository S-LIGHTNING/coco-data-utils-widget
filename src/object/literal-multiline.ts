import { AnyType, MethodBlockParam, MethodTypes, MutatorType, ObjectType } from "slightning-coco-widget"
import { literal } from "./literal"

export const types: MethodTypes = {
    key: "object__literalMultiline",
    label: "字典",
    block: [
        "字典", {
            key: "entries",
            label: "项",
            type: new MutatorType({
                block: [
                    MethodBlockParam.BREAK_LINE, {
                        key: "key",
                        label: "键",
                        type: new AnyType("键")
                    }, ":", {
                        key: "value",
                        label: "值",
                        type: new AnyType("值")
                    }
                ],
                min: 0,
                transformMin: 2,
                transformMax: 5
            })
        }
    ],
    returns: new ObjectType(),
    blockOptions: { inline: false }
}

export const methods: Record<string, Function> = {
    object__literalMultiline: literal
}
