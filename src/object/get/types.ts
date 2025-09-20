import { AnyType, MethodTypes, ObjectType } from "slightning-coco-widget"
import { PathBlockTypes } from "../path"

export const types: MethodTypes = {
    key: "object__get",
    label: "字典获取",
    block: [
        "获取", {
            key: "object",
            label: "字典",
            type: new ObjectType({
                defaultValue: {
                    "字典": {
                        "路径": "值"
                    }
                }
            })
        }, ...PathBlockTypes, "的值"
    ],
    returns: new AnyType()
}
