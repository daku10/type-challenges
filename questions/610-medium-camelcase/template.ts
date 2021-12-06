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
