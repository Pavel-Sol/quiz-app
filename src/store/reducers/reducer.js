import { SET_DATA, GET_NEXT_QUESTION, INCREASE_SCORE, SET_ANSWER, RESET_DATA } from '../type';

const defaultState = {
  data: null,
  questionNum: 0,
  score: 0,
  currentUserAnswer: '',
  totalQuestions: 10,
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };

    case RESET_DATA:
      return {
        ...state,
        data: null,
        questionNum: 0,
        score: 0,
        currentUserAnswer: '',
        totalQuestions: 10,
      };

    case GET_NEXT_QUESTION:
      return { ...state, questionNum: state.questionNum + 1 };

    case INCREASE_SCORE:
      return { ...state, score: state.score + 1 };

    case SET_ANSWER:
      return { ...state, currentUserAnswer: action.payload };

    default:
      return state;
  }
};
