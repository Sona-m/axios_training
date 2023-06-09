import { configureStore } from "@reduxjs/toolkit";
import unitReducer from "./unitSlice";

const store = configureStore({
  // creating redux store
  reducer: {
    unit: unitReducer,
  },
});

export default store;
