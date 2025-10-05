import { AnyType, MethodTypes, MutatorType, ObjectType } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "object__literalInline",
    label: "字典字面单行 v1",
    block: [
        "v1", "字典", {
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
                    }
                ],
                separators: [","],
                min: 0,
                transformMax: 5
            })
        }
    ],
    returns: new ObjectType()
}
