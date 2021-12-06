type Flat<T> = {
  [key in keyof T]: T[key]
}

// in test-cases.ts, use Equal type which can not deal with intersection type
type AppendToObject<T, U extends string, V> = Flat<
  {
    [key in U]: V
  } & {
    [key in keyof T]: T[key]
  }
>

// another solution
// type AppendToObject<T, U extends string, V> = {
//     [key in keyof T | U]: key extends keyof T ? T[key] : V
// }
