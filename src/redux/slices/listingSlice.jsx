import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playersList: [],
  teamsList: [],
  teamDetails: {}
};

const authSlice = createSlice({
  name: 'listing',
  initialState,
  reducers: {
    setPlayerListState: (state, action) => {
      state.playersList = action.payload;
    },
    setTeamListState: (state, action) => {
      state.teamsList = action.payload;
    },
    setTeamDetails: (state, action) => {
      state.teamDetails = action.payload;
    },
  },
});

export const { actions, reducer } = authSlice;
export default authSlice.reducer;
