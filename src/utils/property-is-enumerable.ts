export function propertyIsEnumerable<T extends PropertyKey>(o: {}, p: T): o is { [P in T]: unknown } {
    return Object.prototype.propertyIsEnumerable.call(o, p)
}
