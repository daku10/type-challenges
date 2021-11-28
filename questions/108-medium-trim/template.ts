type ReverseStr<T extends string> = T extends `${infer S}${infer U}`
  ? `${ReverseStr<U>}${S}`
  : T

type Trim<S extends string> = ReverseStr<TrimLeft<ReverseStr<TrimLeft<S>>>>
