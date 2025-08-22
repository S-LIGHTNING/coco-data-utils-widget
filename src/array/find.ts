import { AnyType, ArrayType, BooleanType, FunctionType, IntegerType, MethodTypes } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "array__find",
    label: "列表查找",
    block: [
        {
            key: "array",
            label: "列表",
            type: new ArrayType({
                defaultValue: ["列表"]
            })
        }, "第一个满足", {
            key: "condition",
            label: "条件",
            type: new FunctionType({
                block: [
                    {
                        key: "item",
                        label: "项",
                        type: new AnyType()
                    }, {
                        key: "index",
                        label: "索引",
                        type: new IntegerType()
                    }, {
                        key: "array",
                        label: "列表",
                        type: new ArrayType()
                    }
                ],
                returns: new BooleanType(true)
            })
        }, "的项"
    ],
    returns: new AnyType()
}

export const methods: Record<string, Function> = {
    array__find(
        array: unknown[],
        condition: (item: unknown, index: number, array: unknown[]) => boolean | Promise<boolean>
    ): unknown | Promise<unknown> {
        const conditionResultArray: Promise<boolean>[] = []
        for (const i in array) {
            const conditionResult: boolean | Promise<boolean> = condition(array[i], Number(i) + 1, array)
            if (typeof conditionResult == "boolean") {
                if (conditionResult) {
                    return array[i]
                }
            } else {
                conditionResultArray[i] = conditionResult
            }
        }
        if (conditionResultArray.length == 0) {
            return undefined
        }
        return new Promise((resolve: (value: unknown) => void): void => {
            Promise.all(conditionResultArray.map(
                async (conditionResult: Promise<boolean>, index: number): Promise<void> => {
                    const value: boolean = await conditionResult
                    if (value) {
                        resolve(array[index])
                    }
                }
            )).then((): void => {
                resolve(undefined)
            })
        })
    }
}
