type MergeIntersection<T> = {
  [P in keyof T]: T[P]
}

type Diff<O, O1> = MergeIntersection<Omit<O, keyof O1> & Omit<O1, keyof O>>
