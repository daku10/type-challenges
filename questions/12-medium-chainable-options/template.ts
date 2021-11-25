// I learned type generics of function
// my first answer...
// type Chainable<T = {}> = {
//   option(
//     key: string,
//     value: any
//   ): Chainable<T & { key: typeof value }>
//   get(): T
// }

type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K,
    value: V
  ): Chainable<T & { [key in K]: V }>
  get(): T
}
