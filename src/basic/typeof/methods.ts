import { ValueTypeName } from "./types"

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
