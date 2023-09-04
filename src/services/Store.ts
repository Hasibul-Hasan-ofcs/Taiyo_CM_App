import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contact/ContactSlice";

const store = configureStore({
  reducer: {
    contactReducer: contactReducer,
  },
});

export default store;
