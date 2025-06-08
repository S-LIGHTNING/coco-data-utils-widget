import { StringEnumType } from "slightning-coco-widget"

export type Type =
    "Min" |
    "Max"

export const TypeType = new StringEnumType<Type>([
    ["最小值", "Min"],
    ["最大值", "Max"]
])

export function minAndMax(type: Type, numbers: { number: number }[]): number {
    const newNumbers: number[] = numbers.map(({ number }: { number: number }): number => number)
    switch (type) {
        case "Min":
            return Math.min(...newNumbers)
        case "Max":
            return Math.max(...newNumbers)
    }
}
