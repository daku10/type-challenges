type AnyOf<T extends readonly any[]> = T extends []
  ? false
  : T extends [infer First, ...infer Rest]
  ? First extends 0
    ? AnyOf<Rest>
    : First extends false
    ? AnyOf<Rest>
    : First extends []
    ? AnyOf<Rest>
    : MyEqual<First, {}> extends true
    ? AnyOf<Rest>
    : First extends ''
    ? AnyOf<Rest>
    : true
  : never
