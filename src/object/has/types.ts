import { BooleanType, MethodTypes, ObjectType } from "slightning-coco-widget"
import { PathBlockTypes } from "../path"

export const types: MethodTypes = {
    key: "object__has",
    label: "字典存在",
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
        }, "存在", ...PathBlockTypes
    ],
    returns: new BooleanType()
}
