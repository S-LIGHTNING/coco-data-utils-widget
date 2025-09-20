import { AnyType, MethodTypes, StringEnumType } from "slightning-coco-widget"

export type ValueTypeName =
    "字符串" |
    "数字" |
    "大整数" |
    "布尔" |
    "符号" |
    "未定义" |
    "空" |
    "列表" |
    "字典" |
    "集合" |
    "日期" |
    "函数" |
    "未知"

export const valueTypeType = new StringEnumType<ValueTypeName>([
    "字符串",
    "数字",
    "大整数",
    "布尔",
    "符号",
    "未定义",
    "空",
    "列表",
    "字典",
    "集合",
    "日期",
    "函数",
    "未知"
])

export const types: MethodTypes = {
    key: "basic__typeof",
    label: "基础获取类型",
    block: [
        {
            key: "value",
            label: "值",
            type: new AnyType("值")
        }, "的类型"
    ],
    returns: valueTypeType,
    tooltip: "获取用字符串表示的数据类型，可能的值有：\n- 字符串；\n- 数字；\n- 大整数；\n- 布尔；\n- 符号；\n- 未定义；\n- 空；\n- 列表；\n- 字典；\n- 集合；\n- 日期；\n- 函数；\n- 未知。"
}
