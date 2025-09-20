import { AnyType, MethodTypes, MutatorType } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "basic__deepMergeInline_v1",
    label: "基础深度合并单行",
    block: [
        "深度合并", {
            key: "data",
            label: "数据",
            type: new MutatorType({
                block: [
                    {
                        key: "value",
                        label: "值",
                        type: new AnyType("数据")
                    }
                ],
                min: 2,
                transformMax: 5
            })
        }
    ],
    returns: new AnyType()
}
