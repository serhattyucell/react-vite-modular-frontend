import { useDispatch, useSelector } from 'react-redux';
import { clearAuthError, loginThunk, logout } from '@/modules/auth/store/auth-slice';
import {
  selectAccessToken,
  selectAuthErrorMessage,
  selectAuthStatus,
  selectAuthUserId,
} from '@/modules/auth/store/auth-selectors';
import type { LoginRequest } from '@/modules/auth/interfaces/login-request.interface';
import type { AppDispatch } from '@/app/store/store';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector(selectAuthStatus);
  const accessToken = useSelector(selectAccessToken);
  const userId = useSelector(selectAuthUserId);
  const errorMessage = useSelector(selectAuthErrorMessage);

  const login = async (payload: LoginRequest): Promise<void> => {
    await dispatch(loginThunk(payload)).unwrap();
  };

  return {
    status,
    accessToken,
    userId,
    errorMessage,
    login,
    logout: () => dispatch(logout()),
    clearError: () => dispatch(clearAuthError()),
  };
};
