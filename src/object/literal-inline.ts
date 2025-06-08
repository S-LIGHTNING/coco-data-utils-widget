import { AnyType, MethodTypes, MutatorType, ObjectType } from "slightning-coco-widget"
import { literal } from "./literal"

export const types: MethodTypes = {
    key: "object__literalInline",
    label: "字典字面单行",
    block: [
        "字典", {
            key: "entries",
            label: "项",
            type: new MutatorType({
                block: [
                    {
                        key: "key",
                        label: "键",
                        type: new AnyType("键")
                    }, ":", {
                        key: "value",
                        label: "值",
                        type: new AnyType("值")
                    }, ","
                ],
                min: 0
            })
        }
    ],
    returns: new ObjectType()
}

export const methods: Record<string, Function> = {
    object__literalInline: literal
}
