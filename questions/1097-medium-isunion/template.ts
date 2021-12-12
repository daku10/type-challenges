type IsUnion<T, U = T, isFirst = false> = [T] extends [never]
  ? false
  : T extends U
  ? IsUnion<Exclude<U, T>, T, true>
  : isFirst
