export interface BaseElementProps {
  dataTestId?: string;
}

export type Align = 'left' | 'center' | 'right';

export type Variant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning';

type Omit<T, U> = Pick<T, Exclude<keyof T, keyof U>>;

type ReplaceProps<Inner extends React.ElementType, P> = Omit<
  React.ComponentPropsWithRef<Inner>,
  P
> &
  P;

export interface AsProp<As extends React.ElementType = React.ElementType> {
  as?: As;
}

export interface PolymorphicPropsWithRef<
  TInitial extends React.ElementType,
  Props = unknown
> {
  <As extends React.ElementType = TInitial>(
    props: React.PropsWithChildren<ReplaceProps<As, AsProp<As> & Props>>,
    context?: any,
  ): React.ReactElement | null;
  defaultProps?: Partial<Props>;
  displayName?: string;
}
