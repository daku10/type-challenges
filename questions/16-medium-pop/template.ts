type Pop<T extends unknown[]> = T extends [...infer S, unknown] ? S : never
