import { useRef, useCallback, useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useInfiniteLoading(
  url,
  key,
  options = { initialPageParam: 1, maxPageLoad: null }
) {
  const observer = useRef(null);
  const {
    data,
    error,
    isError,
    isPending,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: key,
    initialPageParam: options.initialPageParam,
    queryFn: async ({ pageParam }) => (await axios(url + pageParam)).data,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined;
    },
  });

  const lastElementRef = useCallback(
    (node) => {
      if (isPending) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [fetchNextPage, hasNextPage, isFetching, isPending]
  );

  const dataBatch = useMemo(() => {
    return data?.pages.reduce((acc, pageData) => {
      return [...acc, ...pageData.slice(1)];
    }, []);
  }, [data]);

  const hasReachedLimit = options.maxPageLoad
    ? data?.pageParams.length >= options.maxPageLoad
    : false;

  return {
    data: dataBatch,
    error,
    isError,
    isPending,
    isFetching,
    hasReachedLimit,
    reference: lastElementRef,
  };
}
