import replaceString from "replace-string"

export const methods: Record<string, Function> = {
    string__replaceAll(string: string, search: string, replace: string): string {
        if (string.replaceAll != undefined) {
            return string.replaceAll(search, replace)
        } else {
            return replaceString(string, search, replace)
        }
    }
}
