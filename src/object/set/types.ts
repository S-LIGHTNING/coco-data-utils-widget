import { AnyType, MethodTypes, ObjectType } from "slightning-coco-widget"
import { PathBlockTypes } from "../path"

export const types: MethodTypes = {
    key: "object__set",
    label: "字典设置",
    block: [
        "设置", {
            key: "object",
            label: "字典",
            type: new ObjectType({
                defaultValue: {
                    "路径": ["值1", "值2"]
                }
            })
        }, ...PathBlockTypes, "的值为", {
            key: "value",
            label: "值",
            type: new AnyType("值")
        }
    ]
}
