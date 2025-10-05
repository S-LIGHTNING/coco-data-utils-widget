import { propertyIsEnumerable } from "../../utils/property-is-enumerable"
import { Path, processPath } from "../path"

export function getPath(object: Record<string, unknown>, path: Path): unknown {
    const keys = processPath(path)
    const accessedKey: (string | number)[] = []
    let current: unknown = object
    for (const key of keys) {
        if (current == null || typeof current != "object") {
            throw new Error(`${accessedKey.length == 0 ? "根" : accessedKey.join("·")} 不是字典`)
        }
        if (!has(current, key)) {
            let message = `${accessedKey.length == 0 ? "根字典" : accessedKey.join("·")} 上不存在键 ${key}`
            if (key in current) {
                message += "\n破坏性更新：出于安全性考虑，自 0.1.0 版本起，将不再支持访问不可枚举属性"
            }
            throw new Error(message)
        }
        current = get(current, key)
        accessedKey.push(key)
    }
    return current
}

export function getPathObject(object: Record<string, unknown>, path: Path): [Record<string, unknown>, string | number] {
    const keys = processPath(path)
    const lastKey = keys.pop()
    if (lastKey == undefined) {
        throw new Error("路径为空")
    }
    const resultObject = getPath(object, keys)
    if (resultObject == null || typeof resultObject != "object") {
        throw new Error(`${keys.length == 0 ? "根" : keys.join("·")} 不是字典`)
    }
    if (!has(resultObject, lastKey)) {
        let message = `${keys.length == 0 ? "根字典" : keys.join("·")} 上不存在键 ${lastKey}`
        if (lastKey in resultObject) {
            message += "\n破坏性更新：出于安全性考虑，自 0.1.0 版本起，将不再支持访问不可枚举属性"
        }
        throw new Error(message)
    }
    return [resultObject as Record<string, unknown>, lastKey]
}

export function has<T extends string | number>(object: {}, key: T): object is { [P in T]: unknown } {
    return propertyIsEnumerable(object, processKey(object, key))
}

export function get(object: Record<string, unknown>, key: string | number): unknown {
    return object[processKey(object, key)]
}

export function processKey(object: {}, key: string | number): string | number {
    if (Array.isArray(object)) {
        let index = typeof key == "number" ? key : Number(key)
        if (Number.isInteger(index) && 1 <= index && index <= object.length) {
            return index - 1
        }
    }
    return key
}

export const methods: Record<string, Function> = {
    object__get: getPath
}
