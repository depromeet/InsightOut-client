/* eslint-disable unused-imports/no-unused-vars */

type StrictPropsWithChildren<P = unknown> = P & {
  children: ReactNode;
};

type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];
