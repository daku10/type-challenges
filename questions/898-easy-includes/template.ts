type MyEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false

type Includes<T extends readonly any[], U> = T extends [infer R, ...infer S]
  ? MyEqual<R, U> extends true
    ? true
    : Includes<S, U>
  : false
