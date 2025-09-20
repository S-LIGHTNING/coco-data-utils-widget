export const methods: Record<string, Function> = {
    string__test(string: string, pattern: string): boolean {
        return new RegExp(pattern).test(string)
    }
}
