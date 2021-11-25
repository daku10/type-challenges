// I learned type generics of function
// my first answer...
// type Chainable<T = {}> = {
//   option(
//     key: string,
//     value: any
//   ): Chainable<T & { key: typeof value }>
//   get(): T
// }

// if you call option with duplicate key, type definition is broken
// ex. option('foo', 10).option('foo', 'aaa') => { foo: number } & { foo: string }
type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K,
    value: V
  ): Chainable<T & { [key in K]: V }>
  get(): T
}
