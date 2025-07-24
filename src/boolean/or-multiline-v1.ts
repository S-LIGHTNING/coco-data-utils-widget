import { BooleanType, MethodTypes, MutatorType } from "slightning-coco-widget"
import { orV1 } from "./or"

export const types: MethodTypes = {
    key: "boolean__orMultiline",
    label: "v1",
    block: [
        {
            key: "firstBoolean",
            label: "",
            type: new BooleanType(true)
        }, {
            key: "booleans",
            label: "布尔值",
            type: new MutatorType({
                block: [
                    {
                        key: "boolean",
                        label: "或",
                        type: new BooleanType(true)
                    }
                ],
                min: 1,
                transformMax: 4
            })
        }
    ],
    returns: new BooleanType(),
    blockOptions: { inline: false }
}

export const methods: Record<string, Function> = {
    boolean__orMultiline: orV1
}
