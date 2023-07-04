/* eslint-disable unused-imports/no-unused-vars */

type StrictPropsWithChildren<P = unknown> = P & {
  children: ReactNode;
};

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];
