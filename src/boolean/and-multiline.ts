import { BooleanType, MethodTypes, MutatorType } from "slightning-coco-widget"
import { and } from "./and"

export const types: MethodTypes = {
    key: "boolean__andMultiline",
    label: "",
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
                        label: "且",
                        type: new BooleanType(true)
                    }
                ],
                min: 1,
                transformMax: 4
            })
        }
    ],
    returns: new BooleanType(),
    blockOptions: {
        inline: false
    }
}

export const methods: Record<string, Function> = {
    boolean__andMultiline: and
}
