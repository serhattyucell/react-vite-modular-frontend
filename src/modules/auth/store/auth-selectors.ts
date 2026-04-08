import type { RootState } from '@/app/store/store';

export const selectAuthStatus = (state: RootState): RootState['auth']['status'] => state.auth.status;
export const selectAccessToken = (state: RootState): string | null => state.auth.accessToken;
export const selectAuthUserId = (state: RootState): string | null => state.auth.userId;
export const selectAuthErrorMessage = (state: RootState): string | null => state.auth.errorMessage;
