type TrimTarget = ' ' | '\t' | '\n'

type TrimLeft<S extends string> = S extends `${infer T}${infer U}`
  ? T extends TrimTarget
    ? TrimLeft<U>
    : S
  : never

// another solution
// we can extract TrimTarget directory in Template Literal Types
// type TrimLeft<S extends string> = S extends `${' ' | '\t' | '\n'}${infer U}`
//   ? TrimLeft<U>
//   : S
