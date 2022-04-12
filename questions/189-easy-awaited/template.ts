type MyAwaited<X extends Promise<unknown>> = X extends Promise<infer U>
  ? U
  : never
