import * as LiteralInline from "./literal-inline"
import * as LiteralMultiline from "./literal-multiline"

import * as Item from "./item"
import * as Find from "./find"

import * as IndexOf from "./index-of"
import * as FindIndex from "./find-index"

import * as Some from "./some"
import * as Every from "./every"

import * as Sort from "./sort"
import * as SortByV1 from "./sort-by-v1"
import * as SortWith from "./sort-with"

import * as Slice from "./slice"
import * as Flatten from "./flatten"
import * as ConcatInline from "./concat-inline"
import * as ConcatMultiline from "./concat-multiline"
import * as Map from "./map"
import * as Filter from "./filter"

import * as Join from "./join"

export const methods: Record<string, Function> = Object.assign({},
    LiteralInline.methods, LiteralMultiline.methods,
    Item.methods, Find.methods,
    IndexOf.methods, FindIndex.methods,
    Some.methods, Every.methods,
    Sort.methods, SortByV1.methods, SortWith.methods,
    Slice.methods, Flatten.methods, ConcatInline.methods, ConcatMultiline.methods, Map.methods, Filter.methods,
    Join.methods
)
