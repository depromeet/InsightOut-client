import { cache, type PropsWithChildren } from 'react';
import { QueryClient } from '@tanstack/query-core';
import { QueryKey, dehydrate, type QueryFunction } from '@tanstack/react-query';
import HydrateOnClient from './HydrateOnClient';

type Props = {
  queryKey: QueryKey;
  queryFn: QueryFunction;
};

const PrefetchHydration = async ({ queryKey, queryFn, children }: PropsWithChildren<Props>) => {
  const getQueryClient = cache(() => new QueryClient());
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(queryKey, queryFn);
  const dehydratedState = dehydrate(queryClient);

  return <HydrateOnClient state={dehydratedState}>{children}</HydrateOnClient>;
};

export default PrefetchHydration;
