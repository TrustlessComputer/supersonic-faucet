import '@/styles/index.scss';

import { Metadata, Viewport } from 'next';

import ModalManager from '@/components/ModalManage';
import ToastOverlay from '@/components/ToastOverlay';
import { MetadataConfig, ViewportConfig } from '@/config';
import StoreProvider from '@/providers/StoreProvider';
import chakraThemes from '@/themes/chakra-themes';
import { ChakraProvider } from '@chakra-ui/react';

export const metadata: Metadata = MetadataConfig;
export const viewport: Viewport = ViewportConfig;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ChakraProvider theme={chakraThemes}>
            <ModalManager />
            {children}
            <ToastOverlay />
          </ChakraProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
