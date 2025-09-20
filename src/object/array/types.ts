import { ArrayType, MethodTypes, ObjectType, StringEnumType } from "slightning-coco-widget"

export type ObjectArrayType = "Keys" | "Values" | "Entries"

export const types: MethodTypes = {
    key: "object__array",
    label: "字典数组",
    block: [
        {
            key: "object",
            label: "字典",
            type: new ObjectType({
                defaultValue: {
                    "字典": {
                        "路径": "值"
                    }
                }
            })
        }, "的", {
            key: "type",
            label: "类型",
            type: new StringEnumType<ObjectArrayType>([
                ["键", "Keys"],
                ["值", "Values"],
                ["键值对", "Entries"]
            ])
        }, "列表"
    ],
    returns: new ArrayType()
}
