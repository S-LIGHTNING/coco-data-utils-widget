import { AnyType, ArrayType, BooleanType, FunctionType, IntegerType, MethodTypes } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "array__filter",
    label: "列表过滤",
    block: [
        "按", {
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
        }, "过滤", {
            key: "array",
            label: "列表",
            type: new ArrayType({
                defaultValue: ["列表"]
            })
        }
    ],
    returns: new ArrayType()
}

export const methods: Record<string, Function> = {
    async array__filter(
        condition: (item: unknown, index: number, array: unknown[]) => boolean | Promise<boolean>,
        array: unknown[]
    ): Promise<unknown[]> {
        const conditionResultArray: (boolean | Promise<boolean>)[] = []
        for (const i in array) {
            conditionResultArray[i] = condition(array[i], Number(i) + 1, array)
        }
        const result: unknown[] = []
        for (const i in array) {
            const conditionResult: boolean | undefined = await conditionResultArray[i]
            if (conditionResult) {
                result.push(array[i])
            }
        }
        return result
    }
}
