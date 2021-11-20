type First<T extends any[]> = T extends [] ? never : T[0]
// another interesting solution
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
