import { AnyType, ArrayType, IntegerType, MethodTypes, StringEnumType } from "slightning-coco-widget"

export type Type = "First" | "Last"

export const types: MethodTypes = {
    key: "array__indexOf",
    label: "列表位置",
    block: [
        {
            key: "array",
            label: "列表",
            type: new ArrayType({
                itemType: new AnyType(),
                defaultValue: ["列表"]
            })
        }, {
            key: "type",
            label: "类型",
            type: new StringEnumType<Type>([
                ["第一个", "First"],
                ["最后一个", "Last"]
            ])
        }, {
            key: "item",
            label: "项",
            type: new AnyType("项")
        }, "的位置"
    ],
    returns: new IntegerType()
}

export const methods: Record<string, Function> = {
    array__indexOf(array: unknown[], type: Type, item: unknown): number {
        switch (type) {
            case "First":
                return array.indexOf(item) + 1
            case "Last":
                return array.lastIndexOf(item) + 1
        }
    }
}
