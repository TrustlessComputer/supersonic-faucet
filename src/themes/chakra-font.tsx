'use client';

import { Global } from '@emotion/react';

export const ChakraFontsFace = () => {
  return (
    <Global
      styles={`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
        @import url('https://fonts.cdnfonts.com/css/sf-pro-display');
      `}
    />
  );
};

export default ChakraFontsFace;
