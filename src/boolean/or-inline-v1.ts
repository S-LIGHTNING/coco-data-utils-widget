import { BooleanType, MethodTypes, MutatorType } from "slightning-coco-widget"
import { orV1 } from "./or"

export const types: MethodTypes = {
    key: "boolean__orInline",
    label: "布尔或 v1",
    block: [
        "v1", {
            key: "firstBoolean",
            label: "首个布尔值",
            type: new BooleanType(true)
        }, {
            key: "booleans",
            label: "布尔值",
            type: new MutatorType({
                block: [
                    "或", {
                        key: "boolean",
                        label: "布尔值",
                        type: new BooleanType(true)
                    }
                ],
                min: 1,
                transformMax: 4
            })
        }
    ],
    returns: new BooleanType()
}

export const methods: Record<string, Function> = {
    boolean__orInline: orV1
}
