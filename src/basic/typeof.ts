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

export const methods: Record<string, Function> = {
    basic__typeof(value: unknown): ValueTypeName {
        switch (typeof value) {
            case "string":
                return "字符串"
            case "number":
                return "数字"
            case "bigint":
                return "大整数"
            case "boolean":
                return "布尔"
            case "symbol":
                return "符号"
            case "undefined":
                return "未定义"
            case "object":
                if (value == null) {
                    return "空"
                } else if (Array.isArray(value)) {
                    return "列表"
                } else if (value instanceof Date) {
                    return "日期"
                } else if (value instanceof Set) {
                    return "集合"
                } else if (Object.getPrototypeOf(value) == Object.prototype) {
                    return "字典"
                } else {
                    return "未知"
                }
            case "function":
                return "函数"
            default:
                return "未知"
        }
    }
}
