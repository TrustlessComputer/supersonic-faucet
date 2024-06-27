import { useState } from 'react';

type Params = {
  api: any;
};

export const useFetchApi = (params: Params) => {
  const { api } = params;

  const [isFetching, setFetching] = useState(false);
  const [isFetched, setFetched] = useState(false);
  const [isLoadMore, setLoadMore] = useState(false);

  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  return {
    isFetching,
    isFetched,
    isLoadMore,

    data,
    error,
  };
};
