import { AnyType, ArrayType, BooleanType, FunctionType, IntegerType, MethodTypes } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "array__some",
    label: "列表存在满足",
    block: [
        {
            key: "array",
            label: "列表",
            type: new ArrayType({
                defaultValue: ["列表"]
            })
        }, "存在满足", {
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
    returns: new BooleanType()
}

export const methods: Record<string, Function> = {
    array__some(
        array: unknown[],
        condition: (item: unknown, index: number, array: unknown[]) => boolean | Promise<boolean>
    ): boolean | Promise<boolean> {
        const conditionResultArray: Promise<boolean>[] = []
        for (const i in array) {
            const conditionResult: boolean | Promise<boolean> = condition(array[i], Number(i) + 1, array)
            if (typeof conditionResult == "boolean") {
                if (conditionResult) {
                    return true
                }
            } else {
                conditionResultArray.push(conditionResult)
            }
        }
        if (conditionResultArray.length == 0) {
            return false
        }
        return new Promise((resolve: (value: boolean) => void): void => {
            Promise.all(conditionResultArray.map(
                async (conditionResult: Promise<boolean>): Promise<void> => {
                    const value: boolean = await conditionResult
                    if (value) {
                        resolve(true)
                    }
                }
            )).then((): void => {
                resolve(false)
            })
        })
    }
}
