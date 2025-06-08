import { BooleanType, MethodTypes, ObjectType } from "slightning-coco-widget"
import { PathBlockTypes, Path, processPath } from "./path"

export const types: MethodTypes = {
    key: "object__has",
    label: "字典存在",
    block: [
        {
            key: "object",
            label: "字典",
            type: new ObjectType({
                defaultValue: {
                    "字典": {
                        "路径": "值"
                    }
                }
            })
        }, "存在", ...PathBlockTypes
    ],
    returns: new BooleanType()
}

export const methods: Record<string, Function> = {
    object__has(object: Record<string, unknown>, path: Path): boolean {
        const keys: string[] = processPath(path)
        let current: unknown = object
        for (const key of keys) {
            if (current == null || typeof current != "object") {
                return false
            }
            if (!(key in current)) {
                return false
            }
            current = (current as Record<string, unknown>)[key]
        }
        return true
    }
}
