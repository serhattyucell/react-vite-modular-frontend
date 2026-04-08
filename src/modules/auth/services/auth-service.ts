import type { LoginResponse } from '@/modules/auth/interfaces/login-response.interface';
import type { LoginRequest } from '@/modules/auth/interfaces/login-request.interface';
import { axiosInstance } from '@/common/services/api/axios-instance';
import type { ApiResponse } from '@/common/interfaces/api-response.interface';

const login = async (payload: LoginRequest): Promise<LoginResponse> => {
  const response = await axiosInstance.post<ApiResponse<LoginResponse>>('/auth/login', payload);
  return response.data.data;
};

export const authService = {
  login,
};
