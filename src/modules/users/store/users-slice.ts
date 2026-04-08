import { createSlice } from '@reduxjs/toolkit';
import type { User } from '@/modules/users/interfaces/user.interface';

interface UsersState {
  items: User[];
}

const initialState: UsersState = {
  items: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const usersReducer = usersSlice.reducer;
