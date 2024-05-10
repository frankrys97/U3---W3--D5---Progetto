export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const POP = "POP";
export const ROCK = "ROCK";
export const HIPHOP = "HIPHOP";
export const ADD_FAVOURITE_SONG = "ADD_FAVOURITE_SONG";
export const REMOVE_FAVOURITE_SONG = "REMOVE_FAVOURITE_SONG";
export const SET_INPUT = "SET_INPUT";
export const SET_SONG_ON_PLAYER = "SET_SONG_ON_PLAYER";

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginError = (error) => ({
  type: LOGIN_ERROR,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const popFetch = (data) => ({
  type: POP,
  payload: data,
});

export const rockFetch = (data) => ({
  type: ROCK,
  payload: data,
});

export const hiphopFetch = (data) => ({
  type: HIPHOP,
  payload: data,
});

export const setInput = (text) => ({
  type: SET_INPUT,
  payload: text,
})

export const getFetchGenres = (artistName, genre) => {
  return (dispatch) => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        console.log(data.data);
        dispatch(genre(data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addFavouriteSong = (song) => ({
  type: ADD_FAVOURITE_SONG,
  payload: song,
});

export const removeFavouriteSong = (song) => ({
  type: REMOVE_FAVOURITE_SONG,
  payload: song.id,
});

export const setSongOnPlayer = (song) => ({
  type: SET_SONG_ON_PLAYER,
  payload: song
})
