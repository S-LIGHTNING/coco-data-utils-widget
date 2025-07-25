import { AnyType, MethodTypes, ObjectType } from "slightning-coco-widget"
import { PathBlockTypes, Path, processPath } from "./path"

export const types: MethodTypes = {
    key: "object__get",
    label: "字典获取",
    block: [
        "获取", {
            key: "object",
            label: "字典",
            type: new ObjectType({
                defaultValue: {
                    "字典": {
                        "路径": "值"
                    }
                }
            })
        }, ...PathBlockTypes, "的值"
    ],
    returns: new AnyType()
}

export const methods: Record<string, Function> = {
    object__get(object: Record<string, unknown>, path: Path): unknown {
        const keys: string[] = processPath(path)
        let current: unknown = object
        for (const key of keys) {
            if (current == null || typeof current != "object") {
                throw new Error("路径不存在")
            }
            current = (current as Record<string, unknown>)[key]
            if (current == undefined) {
                throw new Error("路径不存在")
            }
        }
        return current
    }
}
