import { AnyType, MethodTypes, MutatorType, ObjectType } from "slightning-coco-widget"
import { literal } from "./literal"

export const types: MethodTypes = {
    key: "object__literalMultiline",
    label: "字典",
    block: [
        {
            key: "entries",
            label: "项",
            type: new MutatorType({
                block: [
                    {
                        key: "key",
                        label: "键",
                        type: new AnyType("键")
                    }, {
                        key: "value",
                        label: "值",
                        type: new AnyType("值")
                    }
                ],
                transformMax: 5
            })
        }
    ],
    returns: new ObjectType(),
    blockOptions: {
        inline: false
    }
}

export const methods: Record<string, Function> = {
    object__literalMultiline: literal
}
