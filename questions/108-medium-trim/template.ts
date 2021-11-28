type ReverseStr<T extends string> = T extends `${infer S}${infer U}`
  ? `${ReverseStr<U>}${S}`
  : T

// type Trim<S extends string> = ReverseStr<TrimLeft<ReverseStr<TrimLeft<S>>>>

// another solution
// use infer and static types, clever solution
type Trim<S extends string> = S extends
  | `${infer T}${TrimTarget}`
  | `${TrimTarget}${infer T}`
  ? Trim<T>
  : S
