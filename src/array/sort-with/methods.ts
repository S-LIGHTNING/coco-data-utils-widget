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
