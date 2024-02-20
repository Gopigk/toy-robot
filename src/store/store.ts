import reducers from "../reducers/index";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: reducers,
  // middleware: [thunk as Thunk],
});

export default store;
