type TrimTarget = ' ' | '\t' | '\n'

type TrimLeft<S extends string> = S extends `${infer T}${infer U}`
  ? T extends TrimTarget
    ? TrimLeft<U>
    : S
  : never
