type AnyOf<T extends readonly any[]> = T extends []
  ? false
  : T extends [infer First, ...infer Rest]
  ? First extends 0 | false | [] | '' | null | undefined
    ? AnyOf<Rest>
    : keyof First extends never
    ? AnyOf<Rest>
    : true
  : never
