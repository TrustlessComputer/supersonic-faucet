import { Metadata } from 'next';

export const APP_NAME = 'Supersonic';
export const APP_DEFAULT_TITLE = 'Supersonic';
export const APP_TITLE_TEMPLATE = 'Supersonic';
export const APP_DESCRIPTION = 'Supersonic Description.';

const metadataConfig: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_DOMAIN_URL}`),
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  // manifest: "/manifest.json",// using for PWA
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: [
      {
        url: 'https://cdn.newbitcoincity.com/nbc/icons/bvm-icons/metadata_5.png', // TODO
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: [
      {
        url: 'https://cdn.newbitcoincity.com/nbc/icons/bvm-icons/metadata_5.png', // TODO
        alt: APP_NAME,
      },
    ],
  },
};

export default metadataConfig;
