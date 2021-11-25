type DeepReadonly<T> = T extends object
  ? {
      readonly [P in keyof T]: T[P] extends () => {} ? T[P] : DeepReadonly<T[P]>
      // use Built-in Function type is better.
      // readonly [P in keyof T]: T[P] extends Function ? T[P] : DeepReadonly<T[P]>
    }
  : T
