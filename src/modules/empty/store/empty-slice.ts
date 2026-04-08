import { createSlice } from '@reduxjs/toolkit';
import type { EmptyState } from '@/modules/empty/interfaces/empty.interface';
import { EmptyViewMode } from '@/modules/empty/enums/empty-view-mode.enum';

const initialState: EmptyState = {
  status: 'idle',
  mode: EmptyViewMode.BLANK,
};

const emptySlice = createSlice({
  name: 'empty',
  initialState,
  reducers: {},
});

export const emptyReducer = emptySlice.reducer;
