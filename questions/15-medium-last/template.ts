type Last<T extends any[]> = T extends [...any, infer R] ? R : never
// interesting solution, typescript can solve static type of below, R[length] means T[length] - 1, and so on.
// type Last<T extends any[]> = T extends [any, ...infer R]
//   ? T[R['length']]
//   : never
