import { createSlice } from "@reduxjs/toolkit";

//creating a slice

const unitSlice = createSlice({
  name: "unit",
  initialState: {
    apiData: null,
  },
  reducers: {
    // responsible for how the state of an appln should update in response to diff actions
    setApiData(state, action) {
      // ths reducer handles the action that updates the apidata of the state
      state.apiData = action.payload; // when an action is dispatched with setApidata , it invokes this reducer and pass two arguments - current state , action object
    }, // state - object that the reducer need to update
    // action type - type fo action , payload - holds the data
  }, //action.payload -  data received from api , assign to apidata to update state
});

export const { setApiData } = unitSlice.actions;

export default unitSlice.reducer;
