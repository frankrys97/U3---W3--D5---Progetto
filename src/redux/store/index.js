import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authenticateReducer from "../reducers/AuthenticateReducer";
import homeReducer from "../reducers/HomeReducer";
import favouriteSongsReducer from "../reducers/FavouriteSongs";
import inputReducer from "../reducers/InputReducer";
import songOnPlayerReducer from "../reducers/SongOnPlayer";

const rootReducer = combineReducers({
  authenticate: authenticateReducer,
  player: songOnPlayerReducer,

  home: homeReducer,
  favouriteSongs: favouriteSongsReducer,
  inputSearch: inputReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
