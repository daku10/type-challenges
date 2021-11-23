type MyExcludeForOmit<T, U extends T> = T extends U ? never : T

type MyOmit<T, K extends keyof T> = {
  [P in MyExcludeForOmit<keyof T, K>]: T[P]
}
