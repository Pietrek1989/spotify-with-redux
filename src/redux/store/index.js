import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouriteReducer";
import searchReducer from "../reducers/searchReducer";
import songReducer from "../reducers/songReducer";

const store = configureStore({
  reducer: combineReducers({
    favourite: favouriteReducer,
    search: searchReducer,
    song: songReducer,
  }),
});

export default store;
