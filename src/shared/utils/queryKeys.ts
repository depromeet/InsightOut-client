// ref: https://tkdodo.eu/blog/effective-react-query-keys
export const createQueryKeys = <T extends string>(keyword: T) => {
  const keys = {
    all: [keyword] as const,
    lists: () => [...keys.all, 'list'] as const,
    list: (args: unknown[]) => [...keys.lists(), ...args] as const,
    details: () => [...keys.all, 'detail'] as const,
    detail: (args: unknown[]) => [...keys.details(), ...args] as const,
    count: () => [...keys.all, 'count'] as const,
  };
  return keys;
};
