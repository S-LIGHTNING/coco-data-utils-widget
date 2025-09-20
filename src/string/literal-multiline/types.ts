import { MethodTypes, StringInputType, StringType } from "slightning-coco-widget"

export const types: MethodTypes = {
    key: "string__literalMultiline",
    label: "字符串多行字面",
    block: [
        {
            key: "value",
            label: "值",
            type: new StringType({
                defaultValue: "多行\n字符串",
                inputType: StringInputType.MULTILINE
            })
        }
    ],
    returns: new StringType()
}
