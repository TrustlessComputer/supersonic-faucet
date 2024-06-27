import { throttle } from 'lodash';
import { useCallback } from 'react';

type Params = {
  elementRef?: any;
  scrollDelay?: number; // miliseconds
};

export const useScrollToView = (params: Params) => {
  const { elementRef, scrollDelay = 1 } = params;

  const scrollToElement = () => {
    setTimeout(() => {
      elementRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }, scrollDelay);
  };

  const scrollToTop = useCallback(
    throttle(
      () => {
        setTimeout(() => {
          elementRef?.current?.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        }, scrollDelay);
      },
      1000,
      {
        leading: true,
        trailing: false,
      },
    ),
    [elementRef],
  );

  const scrollToEnd = useCallback(
    throttle(
      () => {
        setTimeout(() => {
          elementRef?.current?.scrollTo({
            top: 0,
            left: 9999990,
            behavior: 'smooth',
          });
        }, scrollDelay);
      },
      1000,
      {
        leading: true,
        trailing: false,
      },
    ),
    [elementRef],
  );

  return {
    elementRef,
    scrollToElement,
    scrollToTop,
    scrollToEnd,
  };
};
