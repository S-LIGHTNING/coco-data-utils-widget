import { AnyType, MethodTypes, ObjectType } from "slightning-coco-widget"
import { PathBlockTypes, Path, processPath } from "./path"

export const types: MethodTypes = {
    key: "object__set",
    label: "字典设置",
    block: [
        "设置", {
            key: "object",
            label: "字典",
            type: new ObjectType({
                defaultValue: {
                    "字典": {
                        "路径": "值"
                    }
                }
            })
        }, ...PathBlockTypes, "的值为", {
            key: "value",
            label: "值",
            type: new AnyType("值")
        }
    ]
}

export const methods: Record<string, Function> = {
    object__set(object: Record<string, unknown>, path: Path, value: unknown): void {
        const keys: string[] = processPath(path)
        const lastKey: string | undefined = keys.pop()
        if (lastKey == undefined) {
            return
        }
        let current: unknown = object
        for (const key of keys) {
            if (current == null || typeof current != "object") {
                throw new Error("路径不存在")
            }
            current = (current as Record<string, unknown>)[key]
        }
        if (current == null || typeof current != "object") {
            throw new Error("路径不存在")
        }
        (current as Record<string, unknown>)[lastKey] = value
    }
}
