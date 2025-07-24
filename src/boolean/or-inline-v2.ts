import { BooleanType, MethodTypes, MutatorType } from "slightning-coco-widget"
import { orV2 } from "./or"

export const types: MethodTypes = {
    key: "boolean__orInline_v2",
    label: "布尔或",
    block: [
        {
            key: "booleans",
            label: "布尔值",
            type: new MutatorType({
                block: [
                    {
                        key: "boolean",
                        label: "布尔值",
                        type: new BooleanType(true)
                    }
                ],
                separators: ["或"],
                min: 2,
                transformMax: 5
            })
        }
    ],
    returns: new BooleanType()
}

export const methods: Record<string, Function> = {
    boolean__orInline_v2: orV2
}
