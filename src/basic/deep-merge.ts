import structuredClonePolyfill from "@ungap/structured-clone"

const structuredClone: typeof global.structuredClone = global.structuredClone ?? structuredClonePolyfill

export function deepMerge(data: { value: unknown }[]): unknown {
    let target: unknown = null
    for (const { value: source } of data) {
        if (Array.isArray(target) && Array.isArray(source)) {
            target = target.concat((source))
        } else if (
            target != null && typeof target == "object" &&
            source != null && typeof source == "object"
        ) {
            for (const [key, value] of Object.entries(source)) {
                if (key in target && typeof (target as any)[key] == "object") {
                    (target as any)[key] = deepMerge([
                        { value: (target as any)[key] }, { value: value }
                    ])
                } else {
                    (target as any)[key] = structuredClone(value)
                }
            }
        } else {
            target = structuredClone(source)
        }
    }
    return target
}
