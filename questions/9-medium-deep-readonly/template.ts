type DeepReadonly<T> = T extends object
  ? {
      readonly [P in keyof T]: T[P] extends () => {} ? T[P] : DeepReadonly<T[P]>
    }
  : T
