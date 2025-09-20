import { MethodTypes, NumberType, ObjectType, StringEnumType } from "slightning-coco-widget"
import { PathBlockTypes } from "../path"

export type ChangeType = "Increase" | "Decrease"

export const types: MethodTypes = {
    key: "object__change",
    label: "字典增减",
    block: [
        "使", {
            key: "object",
            label: "字典",
            type: new ObjectType({
                defaultValue: {
                    "字典": {
                        "路径": 0
                    }
                }
            })
        }, ...PathBlockTypes, "的值", {
            key: "type",
            label: "类型",
            type: new StringEnumType<ChangeType>([
                ["增加", "Increase"],
                ["减少", "Decrease"]
            ])
        }, {
            key: "value",
            label: "值",
            type: new NumberType(1)
        }
    ]
}
