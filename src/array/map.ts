import { AnyType, ArrayType, FunctionType, IntegerType, MethodTypes } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "array__map",
    label: "列表映射",
    block: [
        "按", {
            key: "mapper",
            label: "映射器",
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
                returns: new AnyType()
            })
        }, "映射", {
            key: "array",
            label: "列表",
            type: new ArrayType({
                defaultValue: ["列表"]
            })
        },
    ],
    returns: new ArrayType()
}

export const methods: Record<string, Function> = {
    array__map(
        mapper: (item: unknown, index: number, array: unknown[]) => unknown | Promise<unknown>,
        array: unknown[]
    ): unknown[] | Promise<unknown[]> {
        const mappedPromiseArray: Promise<unknown>[] = []
        const result: unknown[] = []
        for (const i in array) {
            const mappedValue: unknown = mapper(array[i], Number(i) + 1, array)
            if (mappedValue instanceof Promise) {
                mappedPromiseArray[i] = mappedValue
            } else {
                result[i] = mappedValue
            }
        }
        if (mappedPromiseArray.length == 0) {
            return result
        }
        return (async (): Promise<unknown[]> => {
            for (const i in mappedPromiseArray) {
                result[i] = await mappedPromiseArray[i]
            }
            return result
        })()
    }
}
