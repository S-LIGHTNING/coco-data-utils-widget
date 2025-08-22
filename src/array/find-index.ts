import { AnyType, ArrayType, BooleanType, FunctionType, IntegerType, MethodTypes, NumberType } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "array__findIndex",
    label: "列表查找位置",
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
                        type: new NumberType()
                    }, {
                        key: "array",
                        label: "列表",
                        type: new ArrayType()
                    }
                ],
                returns: new BooleanType(true)
            })
        }, "的项的位置"
    ],
    returns: new IntegerType()
}

export const methods: Record<string, Function> = {
    array__findIndex(
        array: unknown[],
        condition: (item: unknown, index: number, array: unknown[]) => boolean | Promise<boolean>
    ): number | Promise<number> {
        const conditionResultArray: Promise<boolean>[] = []
        for (const i in array) {
            const conditionResult: boolean | Promise<boolean> = condition(array[i], Number(i) + 1, array)
            if (typeof conditionResult == "boolean") {
                if (conditionResult) {
                    return Number(i) + 1
                }
            } else {
                conditionResultArray[i] = conditionResult
            }
        }
        if (conditionResultArray.length == 0) {
            return 0
        }
        return (async (): Promise<number> => {
            for (const i in conditionResultArray) {
                if (await conditionResultArray[i]) {
                    return Number(i) + 1
                }
            }
            return 0
        })()
    }
}
