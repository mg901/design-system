type Shades = 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type Commont = 'white' | 'black';


export type BgColorProps = Partial<{
  bgColor:  Commont | `neural-${Shades}` | `green-${Shades}` | `red-${Shades}` | `orange-${Shades}` | `yellow-${Shades}` | `blue-${Shades}`
}>;
