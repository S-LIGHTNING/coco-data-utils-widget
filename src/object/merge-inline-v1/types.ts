import { MethodTypes, MutatorType, ObjectType } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "object__mergeInline_v1",
    label: "字典合并单行",
    block: [
        "合并", {
            key: "objects",
            label: "字典",
            type: new MutatorType({
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
                    }
                ],
                min: 2,
                transformMax: 5
            })
        }
    ],
    returns: new ObjectType()
}
