import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "../slices/infoSlice";

const store = configureStore({
  reducer: {
    info: infoSlice,
  },
});
export default store;
