import { WithType } from "./types"

export const methods: Record<string, Function> = {
    string__with(string: string, withType: WithType, search: string): boolean {
        switch (withType) {
            case "Starts":
                return string.startsWith(search)
            case "Ends":
                return string.endsWith(search)
        }
    }
}
