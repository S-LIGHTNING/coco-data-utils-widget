import { AnyType, BooleanType, FunctionType, MethodTypes, StringEnumType } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "basic__deepEqualWith",
    label: "基础深度等于以",
    block: [
        {
            key: "x",
            label: "X",
            type: new AnyType("X")
        }, "深度", {
            key: "type",
            label: "类型",
            type: new StringEnumType([
                ["等于", "Equal"],
                ["不等于", "NotEqual"],
            ])
        }, {
            key: "y",
            label: "Y",
            type: new AnyType("Y")
        }, "以", {
            key: "comparer",
            label: "比较器",
            type: new FunctionType({
                block: [
                    {
                        key: "x",
                        label: "X",
                        type: new AnyType("X")
                    }, {
                        key: "y",
                        label: "Y",
                        type: new AnyType("Y")
                    }
                ],
                returns: new BooleanType(true)
            })
        }
    ],
    returns: new BooleanType(),
    tooltip: "使用自定义比较器深度比较两个值是否相等。与 基础深度等于 方法不同的是，该方法接收一个自定义比较器来定制比较方式。"
}
