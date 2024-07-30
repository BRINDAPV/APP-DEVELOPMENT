import { SET_TOYS } from './types'; // Ensure this path is correct

const initialState = {
  toys: [],
};

const toyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOYS:
      return {
        ...state,
        toys: action.payload,
      };
    default:
      return state;
  }
};

export default toyReducer;
