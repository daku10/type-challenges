type Flat<T> = {
  [key in keyof T]: T[key]
}

type AppendToObject<T, U extends string, V> = Flat<
  {
    [key in U]: V
  } & {
    [key in keyof T]: T[key]
  }
>
