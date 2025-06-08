import { MethodTypes, NumberType, ObjectType, StringEnumType } from "slightning-coco-widget"
import { PathBlockTypes, Path, processPath } from "./path"

export type ChangeType = "Increase" | "Decrease"

export const types: MethodTypes = {
    key: "object__change",
    label: "字典增减",
    block: [
        "使", {
            key: "object",
            label: "字典",
            type: new ObjectType({
                defaultValue: {
                    "字典": {
                        "路径": 0
                    }
                }
            })
        }, ...PathBlockTypes, "的值", {
            key: "type",
            label: "类型",
            type: new StringEnumType<ChangeType>([
                ["增加", "Increase"],
                ["减少", "Decrease"]
            ])
        }, {
            key: "value",
            label: "值",
            type: new NumberType(1)
        }
    ]
}

export const methods: Record<string, Function> = {
    object__change(
        object: Record<string, unknown>,
        path: Path,
        type: ChangeType,
        value: number
    ): void {
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
        const currentValue = (current as Record<string, unknown>)[lastKey]
        switch (type) {
            case "Increase":
                (current as Record<string, unknown>)[lastKey] = (currentValue as number) + value
                break
            case "Decrease":
                (current as Record<string, unknown>)[lastKey] = (currentValue as number) - value
                break
        }
    }
}
