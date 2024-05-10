import { SET_INPUT } from "../actions";

const initialState = {
  content: "",
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default inputReducer;
