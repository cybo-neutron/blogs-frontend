import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./states/user.slice";

export default configureStore({
  reducer: {
    auth: userSlice,
  },
});
