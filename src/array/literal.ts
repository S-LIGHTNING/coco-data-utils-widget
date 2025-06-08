export function literal(items: { value: unknown }[]): unknown[] {
    return items.map(({ value }: { value: unknown}): unknown => value)
}
