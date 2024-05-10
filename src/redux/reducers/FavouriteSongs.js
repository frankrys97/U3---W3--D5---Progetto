import { ADD_FAVOURITE_SONG, REMOVE_FAVOURITE_SONG } from "../actions";

const initialState = {
  content: [],
};

const favouriteSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE_SONG:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_FAVOURITE_SONG:
      return {
        ...state,
        content: state.content.filter((song) => song.id !== action.payload),
      };
    default:
      return state;
  }
};

export default favouriteSongsReducer;
