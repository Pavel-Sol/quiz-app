import { ThunkAction } from 'redux-thunk';

import {
  SET_DATA,
  GET_NEXT_QUESTION,
  INCREASE_SCORE,
  SET_ANSWER,
  RESET_DATA,
  SHOW_LOADER,
  HIDE_LOADER,
  QuizActionType,
  QuestionItemType
} from './type';
import { shuffleArray } from '../utils';
import {RootStateType} from './index'




export const setDataAC = (payload: null | Array<QuestionItemType>): QuizActionType => {
  return {
    type: SET_DATA,
    payload,
  };
};

export const resetDataAC = (): QuizActionType => {
  return {
    type: RESET_DATA,
  };
};

export const getNextQuestionAC = (): QuizActionType => {
  return {
    type: GET_NEXT_QUESTION,
  };
};

export const fetchQuizQuestions = (): ThunkAction<void, RootStateType, null, QuizActionType> => {
  return async (dispatch) => {
    dispatch(showLoaderAC());

    const res = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`);
    const json = await res.json();
    const questions = await json.results;

    const questionsWithMixedAnswers = questions.map((question: QuestionItemType) => ({
      ...question,
      answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
    }));

    dispatch(setDataAC(questionsWithMixedAnswers));
    dispatch(hideLoaderAC());
  };
};

export const increaseScoreAC = (): QuizActionType => {
  return {
    type: INCREASE_SCORE,
  };
};

export const setAnswerAC = (answer: string): QuizActionType => {
  return {
    type: SET_ANSWER,
    payload: answer,
  };
};

export const showLoaderAC = (): QuizActionType => {
  return { type: SHOW_LOADER };
};

export const hideLoaderAC = (): QuizActionType => {
  return { type: HIDE_LOADER };
};
