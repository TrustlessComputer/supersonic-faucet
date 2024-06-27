import { useAppDispatch, useAppSelector } from '@/stores';
import { fetchBatchStatus } from '@/stores/states/batch/actions';
import { batchStateSelector } from '@/stores/states/batch/selector';
import { useMemo } from 'react';

export const useBatchStore = () => {
  const dispatch = useAppDispatch();
  const batchData = useAppSelector(batchStateSelector);
  const { isBatchStatusFetched, isBatchStatusFetching } = batchData;

  const fetchBacthStatusData = async () => {
    dispatch(fetchBatchStatus());
  };

  const isFetchBatchStatusDone = useMemo(() => {
    return !!isBatchStatusFetched;
  }, [isBatchStatusFetched]);

  return {
    batchData,
    isFetchBatchStatusDone,
    dispatch,
    fetchBacthStatusData,
  };
};
