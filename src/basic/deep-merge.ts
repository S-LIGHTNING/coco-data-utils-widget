import structuredClonePolyfill from "@ungap/structured-clone"

const structuredClone: typeof global.structuredClone = global.structuredClone ?? structuredClonePolyfill

export function deepMerge(data: { value: unknown }[]): unknown {
    let result: unknown = null
    for (const { value } of data) {
        if (Array.isArray(result) && Array.isArray(value)) {
            result = result.concat((value))
        } else if (
            result != null && typeof result == "object" &&
            value != null && typeof value == "object"
        ) {
            for (const [key, valueValue] of Object.entries(value)) {
                if (key in result && typeof (result as any)[key] == "object") {
                    (result as any)[key] = deepMerge([
                        { value: (result as any)[key] }, { value: valueValue }
                    ])
                } else {
                    (result as any)[key] = valueValue
                }
            }
        } else {
            result = structuredClone(value)
        }
    }
    return result
}
