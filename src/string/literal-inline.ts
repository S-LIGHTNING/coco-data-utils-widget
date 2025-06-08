import { MethodTypes, StringType } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "string__literalInline",
    label: "字符串单行字面",
    block: [
        {
            key: "value",
            label: "值",
            type: new StringType("字符串")
        }
    ],
    returns: new StringType()
}

export const methods: Record<string, Function> = {
    string__literalInline(value: string): string {
        return value
    }
}
