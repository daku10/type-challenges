type AppendArgument<Fn extends Function, A> = Fn extends (
  ...arg: infer T
) => infer S
  ? (...arg: [...T, A]) => S
  : never
