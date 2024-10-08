import { combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "@/redux/slices/sidebarSlice";
import authReducer from "@/redux/slices/authSlice";
import listingReducer from "@/redux/slices/listingSlice";
import loadingReducer from "@/redux/slices/loadingSlice";
import candidateReducer from "@/redux/slices/candidateSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
  listing: listingReducer,
  loading: loadingReducer,
  candidate: candidateReducer,
});

export default rootReducer;
