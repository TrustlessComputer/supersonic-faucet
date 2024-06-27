import { useAppDispatch, useAppSelector } from '@/stores';
import { fetchLightNodeStatus } from '@/stores/states/lightnode/actions';
import {
  getLightNodeBatchIDsSelector,
  lightNodeStateSelector,
} from '@/stores/states/lightnode/selector';
import { useMemo } from 'react';

export const useLightNode = () => {
  const dispatch = useAppDispatch();
  const lightNodeState = useAppSelector(lightNodeStateSelector);
  const lightNodeBatchIDs = useAppSelector(getLightNodeBatchIDsSelector);

  const {
    isLightNodeStatusFetched,
    isLightNodeStatusFetching,
    lightNodeStatus,
  } = lightNodeState;

  const fetchLightNodeStatusData = async () => {
    dispatch(fetchLightNodeStatus());
  };

  const isFetchDone = useMemo(() => {
    return !!isLightNodeStatusFetched && !isLightNodeStatusFetching;
  }, [isLightNodeStatusFetched, isLightNodeStatusFetching]);

  return {
    isFetchDone,
    dispatch,
    fetchLightNodeStatusData,
    lightNodeState,
    lightNodeBatchIDs,
  };
};
