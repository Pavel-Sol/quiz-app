import {QuizStateType, QuizActionType} from './../type'

import {
  SET_DATA,
  GET_NEXT_QUESTION,
  INCREASE_SCORE,
  SET_ANSWER,
  RESET_DATA,
  SHOW_LOADER,
  HIDE_LOADER,
  SET_ERROR,
  SET_TOTAL_QUESTIONS
} from '../type';

const defaultState: QuizStateType = {
  data: null,
  questionNum: 0,
  score: 0,
  currentUserAnswer: '',
  totalQuestions: 10,
  loading: false,
  error: '' 
};

export const reducer = (state = defaultState, action: QuizActionType): QuizStateType => {
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
        loading: false,
        error: ''
      };

    case GET_NEXT_QUESTION:
      return { ...state, questionNum: state.questionNum + 1 };

    case INCREASE_SCORE:
      return { ...state, score: state.score + 1 };

    case SET_ANSWER:
      return { ...state, currentUserAnswer: action.payload };

    case SHOW_LOADER:
      return { ...state, loading: true };

    case HIDE_LOADER:
      return { ...state, loading: false };

    case SET_ERROR:
      return { ...state, error: action.payload };

    case SET_TOTAL_QUESTIONS: 
    return {...state, totalQuestions: action.payload}

    default:
      return state;
  }
};
