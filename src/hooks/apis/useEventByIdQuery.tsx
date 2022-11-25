import { AxiosError } from 'axios';
import { QueryClient, useQuery, UseQueryOptions } from 'react-query';

import { fetchEventsDetail } from '~/apis/events';
import queryKeys from '~/constants/queryKeys';
import { EventDetailType } from '~/types/eventType';

export default function useEventByIdQuery(
  eventId: number,
  options?: Omit<UseQueryOptions<EventDetailType, AxiosError>, 'queryKey' | 'queryFn'>
) {
  return useQuery(queryKeys.events.byId(eventId), () => fetchEventsDetail(eventId), options);
}

export const prefetchEventById = async ({ queryClient, eventId }: { queryClient: QueryClient; eventId: number }) =>
  queryClient.prefetchQuery(queryKeys.events.byId(eventId), () => fetchEventsDetail(eventId));
