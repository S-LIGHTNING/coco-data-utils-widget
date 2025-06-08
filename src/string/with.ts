import { BooleanType, MethodTypes, StringEnumType, StringType } from "slightning-coco-widget"

export type WithType = "Starts" | "Ends"

export const types: MethodTypes = {
    key: "string__with",
    label: "字符串起始和终止",
    block: [
        {
            key: "string",
            label: "字符串",
            type: new StringType("字符串")
        }, {
            key: "withType",
            label: "类型",
            type: new StringEnumType<WithType>([
                { label: "起始", value: "Starts" },
                { label: "结束", value: "Ends" }
            ])
        }, "于", {
            key: "search",
            label: "字符",
            type: new StringType({
                defaultValue: "字符"
            })
        }
    ],
    returns: new BooleanType(),
    tooltip: "判断给定字符串是否以指定字符开头或结尾。"
}

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
