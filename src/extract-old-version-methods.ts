import { MethodTypesNode, StandardMethodGroup, StandardTypes, traverseTypes, Widget } from "slightning-coco-widget"

/**
 * 提取旧版本的方法，把这些方法放到最后面。
 */
export function extractOldVersionMethods(types: StandardTypes, widget: Widget): [StandardTypes, Widget] {
    const OldVersionMethodGroup: StandardMethodGroup = {
        label: "旧版",
        contents: []
    }
    traverseTypes(types, {
        MethodTypes(node: MethodTypesNode): void {
            const { value: method } = node
            if (/v[0-9]+$/.test(method.label)) {
                if (method.tooltip == null) {
                    method.tooltip = "该方法是旧版本的方法，出于兼容性考虑而被保留，请不要使用！"
                } else {
                    method.tooltip = `该方法是旧版本的方法，出于兼容性考虑而被保留，请不要使用！\n\n${method.tooltip}`
                }
                method.blockOptions = {
                    ...node.blockOptions,
                    ...method.blockOptions
                }
                node.remove()
                OldVersionMethodGroup.contents.push(method)
            }
        }
    })
    types.methods.push(OldVersionMethodGroup)
    return [types, widget]
}
