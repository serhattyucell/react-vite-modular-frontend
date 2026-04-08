import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from '@/modules/users/store/users-slice';
import { authReducer } from '@/modules/auth/store/auth-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
