import { AnyType, MethodTypes, StringEnumType } from "slightning-coco-widget"

export type Type = "Null" | "Undefined"

export const types: MethodTypes = {
    key: "basic__nullOrUndefined",
    label: "基础空或未定义",
    block: [
        {
            key: "type",
            label: "类型",
            type: new StringEnumType<Type>([
                ["未定义", "Undefined"],
                ["空", "Null"]
            ])
        }
    ],
    returns: new AnyType(),
    tooltip: "获取空或未定义。"
}

export const methods: Record<string, Function> = {
    basic__nullOrUndefined(type: Type): null | undefined {
        switch (type) {
            case "Null":
                return null
            case "Undefined":
                return undefined
        }
    }
}
