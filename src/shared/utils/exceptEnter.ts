import { KeyboardEvent } from 'react';

export const exceptEnter = (e: KeyboardEvent<HTMLElement>) => {
  if (e.key === 'Enter') {
    e.preventDefault();
  }
};
