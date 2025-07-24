export function merge(objects: { object: object }[]): object {
    return Object.assign({}, ...objects.map(
        ({ object }: { object: object }): object => object)
    )
}
