import { env } from '@/config/env/env';

export const appConfig = {
  name: env.appName,
  apiBaseUrl: env.apiBaseUrl,
} as const;
