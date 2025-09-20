import { AnyType, MethodBlockParam, MethodTypes, MutatorType } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "basic__deepMergeMultiline_v1",
    label: "基础深度合并多行",
    block: [
        "深度合并", {
            key: "data",
            label: "数据",
            type: new MutatorType({
                block: [
                    MethodBlockParam.BREAK_LINE, {
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
    returns: new AnyType(),
    blockOptions: { inline: false }
}
