import type { InternalAxiosRequestConfig } from 'axios';
import { AuthStorageKey } from '@/modules/auth/enums/auth-storage-key.enum';

export const attachAuthInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token = localStorage.getItem(AuthStorageKey.ACCESS_TOKEN);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
