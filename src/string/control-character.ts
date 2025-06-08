import { MethodTypes, StringEnumType } from "slightning-coco-widget"

type ControlCharacterName =
    "NewLine" |
    "Tab" |
    "CarriageReturn" |
    "PageBreak"

const ControlCharacterNameType = new StringEnumType<ControlCharacterName>([
    ["换行符", "NewLine"],
    ["制表符", "Tab"],
    ["回车符", "CarriageReturn"],
    ["换页符", "PageBreak"]
])

export const types: MethodTypes = {
    key: "string__controlCharacter",
    label: "字符串控制字符",
    block: [
        {
            key: "controlCharacterName",
            label: "控制字符",
            type: ControlCharacterNameType
        }
    ],
    returns: ControlCharacterNameType
}

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
