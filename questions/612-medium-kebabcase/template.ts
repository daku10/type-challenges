type UpperAlphabet =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z'

type KebabCaseInternal<S extends string> = S extends `${infer T}${infer Rest}`
  ? T extends UpperAlphabet
    ? `-${Lowercase<T>}${KebabCaseInternal<Rest>}`
    : `${T}${KebabCaseInternal<Rest>}`
  : S

type KebabCase<S extends string> = S extends `${infer First}${infer Rest}`
  ? First extends UpperAlphabet
    ? `${Lowercase<First>}${KebabCaseInternal<Rest>}`
    : `${First}${KebabCaseInternal<Rest>}`
  : S
