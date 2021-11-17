import { SET_LEARNING_MODE } from "../actions/types";

const initialState = {
    isLearningMode: false,
};

export default function (state = initialState, action) {
  console.log('inside reducer', action)
  switch (action.type) {
    case SET_LEARNING_MODE:
      return  {
        ...state,
        isLearningMode: action.payload,
      }
    default:
      return state;
  }
}