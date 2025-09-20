import { ArrayType, MethodTypes, ObjectType } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "object__fromEntries",
    label: "字典从键值对",
    block: [
        "字典从", {
            key: "entries",
            label: "键值对",
            type: new ArrayType({
                itemType: new ArrayType(),
                defaultValue: [
                    ["键1", "值1"],
                    ["键2", "值2"]
                ]
            })
        }
    ],
    returns: new ObjectType()
}
