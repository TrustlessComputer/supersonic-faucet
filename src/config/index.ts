import process from 'process';

import { default as MetadataConfig } from './metadata';
import { default as ViewportConfig } from './viewport';

export const APP_ENV: string = process.env.NEXT_PUBLIC_APP_ENV!;
export const DOMAIN_URL: string = process.env.NEXT_PUBLIC_DOMAIN_URL!;

export const CDN_URL: string = process.env.NEXT_PUBLIC_CDN_URL!;

// API
export const API_URL: string = process.env.NEXT_PUBLIC_API_URL!;
export const API_KEY: string = process.env.NEXT_PUBLIC_API_KEY!;

// PUBLIC URL
export const BITCOIN_EXPLORER_URL: string =
  process.env.NEXT_PUBLIC_BITCOIN_EXPLORER_URL!;

// Envs
export const isDevelop = APP_ENV === 'develop';
export const isStaging = APP_ENV === 'staging';
export const isProduction = APP_ENV === 'production';

export { MetadataConfig, ViewportConfig };
