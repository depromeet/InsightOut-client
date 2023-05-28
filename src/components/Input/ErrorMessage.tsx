import { PropsWithChildren } from 'react';

export const ErrorMessage = ({ children }: PropsWithChildren) => <p className="mt-2 text-xs text-error">{children}</p>;
