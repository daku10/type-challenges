type Awaited<X extends Promise<unknown>> = X extends Promise<infer U>
  ? U
  : never
