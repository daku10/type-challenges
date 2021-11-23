type MyExcludeForOmit<T, U extends T> = T extends U ? never : T

type MyOmit<T, K extends keyof T> = {
  [P in MyExcludeForOmit<keyof T, K>]: T[P]
}

// another solution. but why this is success? what is as?
// type MyOmit<T, K extends keyof T> = {
//     [P in keyof T as P extends K ? never : P]: T[P]
//   }
