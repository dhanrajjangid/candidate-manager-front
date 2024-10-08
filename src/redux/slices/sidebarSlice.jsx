import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    open: false
  },
  reducers: {
    toggleSidebar: (state, action) => {
      state.open = action.payload;
    }
  },
});

export const { actions, reducer } = sidebarSlice;
export default sidebarSlice.reducer;
