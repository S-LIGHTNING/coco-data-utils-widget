import { AnyType, ArrayType, BooleanType, FunctionType, MethodTypes } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "array__sortWith",
    label: "列表自定义排序",
    block: [
        {
            key: "array",
            label: "列表",
            type: new ArrayType({
                defaultValue: ["列表"]
            })
        }, "按", {
            key: "comparer",
            label: "比较器",
            type: new FunctionType({
                block: [
                    {
                        key: "x",
                        label: "X",
                        type: new AnyType()
                    }, {
                        key: "y",
                        label: "Y",
                        type: new AnyType()
                    }
                ],
                returns: new BooleanType(true)
            })
        }, "排列"
    ],
    tooltip: "按照自定义的顺序重新排列列表中的元素。与 列表排序 方法不同的是，该方法接收一个自定义比较器来定制比较方法。\n比较器：该函数接收两个参数 X 和 Y，如果 X 应该排在 Y 前面，则应该返回 真，反之则应该返回 假，如果 X 和 Y 相同，返回 真 或 假 都可以。"
}
