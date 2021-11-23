type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & T

// another solution
// but K extends keyof T fails..., [K] extends [keyof T] succeeds.
// why?
// type MyReadonly2<T, K = ''> = [K] extends [keyof T]
//   ? Readonly<Pick<T, K>> & Omit<T, K>
//   : Readonly<T>
