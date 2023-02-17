export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_SEARCH_RESULT = "GET_SEARCH_RESULT";
export const ADD_TO_PLAYER = "ADD_TO_PLAYER";

export const addToFavouriteAction = (favouriteItem) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: favouriteItem,
  };
};
export const removeFromFavouriteAction = (favouriteItem) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: favouriteItem,
  };
};

export const getSearchResultActionAsync = (query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
      );
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: GET_SEARCH_RESULT,
          payload: data.data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToPlayerAction = (favouriteItem) => {
  return {
    type: ADD_TO_PLAYER,
    payload: favouriteItem,
  };
};
