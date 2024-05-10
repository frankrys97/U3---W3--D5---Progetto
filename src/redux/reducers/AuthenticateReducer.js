import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "../actions";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authenticateReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authenticateReducer;
