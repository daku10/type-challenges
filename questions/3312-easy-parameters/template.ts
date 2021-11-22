type MyParameters<T extends (...args: any[]) => unknown> = T extends (
  ...args: infer S
) => unknown
  ? S
  : never
