import { BooleanType, MethodTypes, MutatorType } from "slightning-coco-widget"
import { andV1 } from "./and"

export const types: MethodTypes = {
    key: "boolean__andInline",
    label: "布尔且 v1",
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
                    "且", {
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
    boolean__andInline: andV1
}
