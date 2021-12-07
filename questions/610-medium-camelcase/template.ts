type LowerAlphabet =
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z'

type CamelCase1<S extends string> =
  S extends `${infer T}-${infer U}${infer Rest}`
    ? U extends LowerAlphabet
      ? `${T}${Capitalize<U>}${CamelCase1<Rest>}`
      : `${T}-${CamelCase1<`${U}${Rest}`>}`
    : S

// better solution
// Rest extends Capitalize<Rest> is key point
// type CamelCase1<S extends string> = S extends `${infer T}-${infer Rest}`
//   ? Rest extends Capitalize<Rest>
//     ? `${T}-${CamelCase1<`${Rest}`>}`
//     : `${T}${CamelCase1<Capitalize<Rest>>}`
//   : S
