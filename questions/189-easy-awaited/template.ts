type MyAwaited<X extends Promise<unknown>> = X extends Promise<infer U>
  ? U extends Promise<unknown>
    ? MyAwaited<U>
    : U
  : never
