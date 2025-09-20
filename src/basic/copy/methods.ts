import structuredClonePolyfill from "@ungap/structured-clone"

export const methods: Record<string, Function> = {
    basic__copy(data: unknown): unknown {
        return (global.structuredClone ?? structuredClonePolyfill)(data)
    }
}
