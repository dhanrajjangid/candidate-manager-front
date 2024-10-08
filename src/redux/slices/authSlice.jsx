import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  user: {
    name: null,
    email: null,
    token: null,
    player_id: null
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { name, email, token, player_id } = action.payload;
      state.loggedIn = true;
      state.user = { name, email, token, player_id };
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    logout: (state) => {
      state.loggedIn = false;
      state.user = initialState.user;
      localStorage.removeItem('user');
      localStorage.removeItem('token'); // Clear token from sessionStorage or localStorage
    }
  },
});

export const { actions, reducer } = authSlice;
export default authSlice.reducer;
