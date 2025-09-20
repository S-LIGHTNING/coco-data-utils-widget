import { ControlCharacterName } from "./types"

export const methods: Record<string, Function> = {
    string__controlCharacter(controlCharacterName: ControlCharacterName): string {
        switch (controlCharacterName) {
            case "NewLine":
                return "\n"
            case "Tab":
                return "\t"
            case "CarriageReturn":
                return "\r"
            case "PageBreak":
                return "\f"
        }
    }
}
