import { ADD_TO_PLAYER } from "../actions";

const initialState = {
  content: [],
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYER:
      return {
        ...state,
        content: [action.payload],
      };
    default:
      return state;
  }
};

export default songReducer;
