import { AnyType, BooleanType, MethodTypes, StringEnumType } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "basic__deepEqual",
    label: "基础深度等于",
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
        }
    ],
    returns: new BooleanType(),
    tooltip: "深度比较两个值是否相等。与 基础等于 方法不同的是，该方法会递归比较列表和字典类型的值。对于其他类型的值，使用 同0同值于 算法进行比较。"
}
