type LengthOfString1<
  S extends string,
  T extends string[] = []
> = S extends `${any}${infer Rest}`
  ? LengthOfString1<Rest, ['', ...T]>
  : T['length']

// not good answer
// type Increment<T> = T extends 0
//   ? 1
//   : T extends 1
//   ? 2
//   : T extends 2
//   ? 3
//   : T extends 3
//   ? 4
//   : T extends 4
//   ? 5
//   : T extends 5
//   ? 6
//   : T extends 6
//   ? 7
//   : T extends 7
//   ? 8
//   : T extends 8
//   ? 9
//   : T extends 9
//   ? 10
//   : T extends 10
//   ? 11
//   : T extends 11
//   ? 12
//   : T extends 12
//   ? 13
//   : T extends 13
//   ? 14
//   : T extends 14
//   ? 15
//   : T extends 15
//   ? 16
//   : never

// type LengthOfString1<S extends string, T = 0> = S extends `${any}${infer Rest}`
//   ? LengthOfString1<Rest, Increment<T>>
//   : T
