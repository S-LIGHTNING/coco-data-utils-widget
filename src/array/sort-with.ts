import { AnyType, ArrayType, BooleanType, FunctionType, MethodTypes } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "array__sortWith",
    label: "列表自定义排序",
    block: [
        {
            key: "array",
            label: "列表",
            type: new ArrayType({
                defaultValue: ["列表"]
            })
        }, "按", {
            key: "comparer",
            label: "比较器",
            type: new FunctionType({
                block: [
                    {
                        key: "x",
                        label: "X",
                        type: new AnyType()
                    }, {
                        key: "y",
                        label: "Y",
                        type: new AnyType()
                    }
                ],
                returns: new BooleanType(true)
            })
        }, "排列"
    ],
    tooltip: "按照自定义的顺序重新排列列表中的元素。与 列表排序 方法不同的是，该方法接收一个自定义比较器来定制比较方法。\n比较器：该函数接收两个参数 X 和 Y，如果 X 应该排在 Y 前面，则应该返回 真，反之则应该返回 假，如果 X 和 Y 相同，返回 真 或 假 都可以。"
}

export async function merge(
    array: unknown[],
    start: number,
    mid: number,
    end: number,
    comparer: (x: unknown, y: unknown) => boolean | Promise<boolean>
): Promise<void> {
    const left: unknown[] = array.slice(start, mid)
    const right: unknown[] = array.slice(mid, end)
    let i: number = 0
    let j: number = 0
    let k: number = start
    while (i < left.length && j < right.length) {
        const comparerResult: boolean = await comparer(left[i], right[j]) || !await comparer(right[j], left[i])
        if (comparerResult) {
            array[k] = left[i]
            i++
        } else {
            array[k] = right[j]
            j++
        }
        k++
    }
    while (i < left.length) {
        array[k] = left[i]
        i++
        k++
    }
    while (j < right.length) {
        array[k] = right[j]
        j++
        k++
    }
}

export async function mergeSort(
    array: unknown[],
    start: number,
    end: number,
    comparer: (x: unknown, y: unknown) => boolean | Promise<boolean>
): Promise<void> {
    if (end - start <= 1) {
        return
    }
    const mid: number = Math.floor((start + end) / 2)
    await mergeSort(array, start, mid, comparer)
    await mergeSort(array, mid, end, comparer)
    await merge(array, start, mid, end, comparer)
}

export const methods: Record<string, Function> = {
    array__sortWith(
        array: unknown[],
        comparer: (x: unknown, y: unknown) => boolean | Promise<boolean>
    ): Promise<void> {
        return mergeSort(array, 0, array.length, comparer)
    }
}
