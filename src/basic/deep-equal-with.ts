import { AnyType, BooleanType, FunctionType, MethodTypes, StringEnumType } from "slightning-coco-widget"

export async function deepEqualWith(
    x: unknown,
    y: unknown,
    comparer: (x: unknown, y: unknown) => boolean | Promise<boolean>
): Promise<boolean> {
    if (await comparer(x, y)) {
        return true
    }
    if (
        (x != null && typeof x == "object") &&
        (y != null && typeof y == "object")
    ) {
        const keys: string[] = []
        const equalResultArray: Promise<boolean>[] = []
        for (const key in x) {
            if (!(key in y)) {
                return false
            }
            keys.push(key)
        }
        for (const key in y) {
            if (!(key in x)) {
                return false
            }
        }
        for (const key of keys) {
            equalResultArray.push(deepEqualWith(x[key as keyof typeof x], y[key as keyof typeof y], comparer))
        }
        return new Promise((resolve: (value: boolean) => void): void => {
            Promise.all(
                equalResultArray.map(async (value: Promise<boolean>): Promise<void> => {
                    if (!await value) {
                        resolve(false)
                    }
                }
            )).then((): void => {
                resolve(true)
            })
        })
    }
    return false
}

export const types: MethodTypes = {
    key: "basic__deepEqualWith",
    label: "基础深度等于以",
    block: [
        {
            key: "x",
            label: "X",
            type: new AnyType("X")
        }, "深度", {
            key: "type",
            label: "类型",
            type: new StringEnumType([
                ["等于", "Equal"],
                ["不等于", "NotEqual"],
            ])
        }, {
            key: "y",
            label: "Y",
            type: new AnyType("Y")
        }, "以", {
            key: "comparer",
            label: "比较器",
            type: new FunctionType({
                block: [
                    {
                        key: "x",
                        label: "X",
                        type: new AnyType("X")
                    }, {
                        key: "y",
                        label: "Y",
                        type: new AnyType("Y")
                    }
                ],
                returns: new BooleanType(true)
            })
        }
    ],
    returns: new BooleanType(),
    tooltip: "使用自定义比较器深度比较两个值是否相等。与 基础深度等于 方法不同的是，该方法接收一个自定义比较器来定制比较方式。"
}

export const methods: Record<string, Function> = {
    async basic__deepEqualWith(
        x: unknown,
        type: "Equal" | "NotEqual",
        y: unknown,
        comparer: (x: unknown, y: unknown) => boolean
    ): Promise<boolean> {
        switch (type) {
            case "Equal":
                return deepEqualWith(x, y, comparer)
            case "NotEqual":
                return !await deepEqualWith(x, y, comparer)
        }
    }
}
