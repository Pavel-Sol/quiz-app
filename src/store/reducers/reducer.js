import { SET_DATA, GET_NEXT_QUESTION, INCREASE_SCORE } from '../type';

const defaultState = {
  data: null,
  questionNum: 0,
  score: 0,
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };

    case GET_NEXT_QUESTION:
      return { ...state, questionNum: state.questionNum + 1 };

    case INCREASE_SCORE:
      return { ...state, score: state.score + 1 };

    default:
      return state;
  }
};
