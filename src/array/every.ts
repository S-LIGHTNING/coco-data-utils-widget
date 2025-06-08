import { AnyType, ArrayType, BooleanType, FunctionType, IntegerType, MethodTypes } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "array__every",
    label: "列表全部满足",
    block: [
        {
            key: "array",
            label: "列表",
            type: new ArrayType({
                itemType: new AnyType(),
                defaultValue: ["列表"]
            })
        }, "全部项满足", {
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
        }
    ],
    returns: new BooleanType()
}

export const methods: Record<string, Function> = {
    array__every(
        array: unknown[],
        condition: (item: unknown, index: number, array: unknown[]) => boolean | Promise<boolean>
    ): boolean | Promise<boolean> {
        const conditionResultArray: Promise<boolean>[] = []
        for (const i in array) {
            const conditionResult: boolean | Promise<boolean> = condition(array[i], Number(i) + 1, array)
            if (typeof conditionResult == "boolean") {
                if (!conditionResult) {
                    return false
                }
            } else {
                conditionResultArray.push(conditionResult)
            }
        }
        if (conditionResultArray.length == 0) {
            return true
        }
        return new Promise((resolve: (value: boolean) => void): void => {
            Promise.all(conditionResultArray.map(
                async (conditionResult: Promise<boolean>): Promise<void> => {
                    const value: boolean = await conditionResult
                    if (!value) {
                        resolve(false)
                    }
                }
            )).then((): void => {
                resolve(true)
            })
        })
    }
}
