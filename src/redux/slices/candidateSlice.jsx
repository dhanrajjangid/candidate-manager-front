import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  candidateList: [],
};

const authSlice = createSlice({
  name: "candidate",
  initialState,
  reducers: {
    setCandidateListState: (state, action) => {
      state.candidateList = action.payload;
    },
  },
});

export const { actions, reducer } = authSlice;
export default authSlice.reducer;
