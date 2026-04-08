import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AuthStatus } from '@/modules/auth/types/auth-status.type';
import { authService } from '@/modules/auth/services/auth-service';
import type { LoginResponse } from '@/modules/auth/interfaces/login-response.interface';
import type { LoginRequest } from '@/modules/auth/interfaces/login-request.interface';
import { AuthStorageKey } from '@/modules/auth/enums/auth-storage-key.enum';

interface AuthState {
  status: AuthStatus;
  accessToken: string | null;
  userId: string | null;
  errorMessage: string | null;
}

const initialState: AuthState = {
  status: 'idle',
  accessToken: localStorage.getItem(AuthStorageKey.ACCESS_TOKEN),
  userId: null,
  errorMessage: null,
};

export const loginThunk = createAsyncThunk<LoginResponse, LoginRequest, { rejectValue: string }>(
  'auth/login',
  async (payload, thunkApi) => {
    try {
      const response = await authService.login(payload);
      return response;
    } catch {
      return thunkApi.rejectWithValue('Login failed. Please check your credentials.');
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state): void => {
      state.status = 'idle';
      state.accessToken = null;
      state.userId = null;
      state.errorMessage = null;
      localStorage.removeItem(AuthStorageKey.ACCESS_TOKEN);
    },
    clearAuthError: (state): void => {
      state.errorMessage = null;
    },
    setAccessToken: (state, action: PayloadAction<string>): void => {
      state.accessToken = action.payload;
      localStorage.setItem(AuthStorageKey.ACCESS_TOKEN, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state): void => {
        state.status = 'loading';
        state.errorMessage = null;
      })
      .addCase(loginThunk.fulfilled, (state, action): void => {
        state.status = 'authenticated';
        state.accessToken = action.payload.accessToken;
        state.userId = action.payload.userId;
        localStorage.setItem(AuthStorageKey.ACCESS_TOKEN, action.payload.accessToken);
      })
      .addCase(loginThunk.rejected, (state, action): void => {
        state.status = 'error';
        state.errorMessage = action.payload ?? 'Unexpected authentication error.';
      });
  },
});

export const { logout, clearAuthError, setAccessToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
