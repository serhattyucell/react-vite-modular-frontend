import axios from 'axios';
import { appConfig } from '@/config/app/app-config';
import { attachAuthInterceptor } from '@/common/services/api/interceptors/auth-interceptor';

export const axiosInstance = axios.create({
  baseURL: appConfig.apiBaseUrl,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(attachAuthInterceptor);
