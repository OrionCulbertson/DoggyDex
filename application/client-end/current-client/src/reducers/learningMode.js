import { SET_LEARNING_MODE } from "../actions/types";

const initialState = {
    isLearningMode: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_LEARNING_MODE:
      return { isLearningMode: payload };

    default:
      return state;
  }
}