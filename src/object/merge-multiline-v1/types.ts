import { MethodBlockParam, MethodTypes, MutatorType, ObjectType } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "object__mergeMultiline_v1",
    label: "字典合并多行",
    block: [
        "合并", {
            key: "objects",
            label: "字典",
            type: new MutatorType({
                block: [
                    MethodBlockParam.BREAK_LINE, {
                        key: "object",
                        label: "字典",
                        type: new ObjectType({
                            defaultValue: {
                                "字典": {
                                    "路径": "值"
                                }
                            }
                        })
                    }
                ],
                min: 2,
                transformMax: 5
            })
        }
    ],
    returns: new ObjectType(),
    blockOptions: { inline: false }
}
