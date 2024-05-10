import { SET_SONG_ON_PLAYER } from "../actions";


const initialState = {
    content: null
};


const songOnPlayerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SONG_ON_PLAYER:
            return {
                ...state,
                content: action.payload
            }
        default:
            return state
    }
}

export default songOnPlayerReducer