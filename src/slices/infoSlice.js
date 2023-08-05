import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: "",
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setAge(state, action) {
      state.age = action.payload;
    },
  },
});

export const { setAge, setName } = infoSlice.actions;

export default infoSlice.reducer;
