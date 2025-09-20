export const methods: Record<string, Function> = {
    string__regExpReplace(string: string, pattern: string, flags: string, replace: string): string {
        return string.replace(new RegExp(pattern, flags), replace)
    }
}
