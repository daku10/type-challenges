type Arr<T, S extends unknown[]> = [T, ...S]

type ExtractPromise<T> = T extends Promise<infer U> ? U : T

type ExractAllPromise<T extends unknown[]> = T extends [infer S, ...infer R]
  ? Arr<ExtractPromise<S>, ExractAllPromise<R>>
  : []

declare function PromiseAll<T extends readonly unknown[]>(
  values: readonly [...T]
): T extends [infer S, ...infer R]
  ? Promise<Arr<ExtractPromise<S>, ExractAllPromise<R>>>
  : never

const promiseAll1 = PromiseAll([1, 2, 3] as const)
const promiseAll2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAll3 = PromiseAll([1, 2, Promise.resolve(3)])
