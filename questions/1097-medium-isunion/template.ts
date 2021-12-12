type IsUnion<T, U = T, isFirst = false> = [T] extends [never]
  ? false
  : T extends U
  ? IsUnion<Exclude<U, T>, never, true>
  : isFirst

// better solution
// type IsUnion<T, U = T> = T extends T
//   ? U | T extends U & T
//     ? false
//     : true
//   : never
