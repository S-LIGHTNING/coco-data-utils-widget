export const methods: Record<string, Function> = {
    string__match(string: string, pattern: string, flags: string): string[] {
        const matches: RegExpMatchArray | null = string.match(new RegExp(pattern, flags))
        return matches ?? []
    }
}
