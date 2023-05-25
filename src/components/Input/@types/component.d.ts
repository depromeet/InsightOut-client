type Component<T extends React.ElementType> = {
  className?: string;
  children?: React.ReactNode;
} & React.ComponentPropsWithRef<T>;
