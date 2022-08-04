import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    //todos los reducers de nuestro proyecto
  },
});
