import { POP, ROCK, HIPHOP } from "../actions";

const initialState = {
  pop: [],
  rock: [],
  hiphop: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case POP:
      return {
        ...state,
        pop: action.payload,
      };
    case ROCK:
      return {
        ...state,
        rock: action.payload,
      };
    case HIPHOP:
      return {
        ...state,
        hiphop: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
