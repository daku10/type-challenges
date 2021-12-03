type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends T
  ? [T, ...Permutation<Exclude<U, T>>]
  : never

// below is basic idea.
// T extends T means fixes T as one of T
// type TwoElementUnionToArray<T, U = T> = T extends T ? [T, Exclude<U, T>] : never
// type H = TwoElementUnionToArray<'A' | 'B'>
// => H = ['A', 'B'] | ['B' , 'A']
