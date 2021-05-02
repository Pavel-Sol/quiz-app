import {
  SET_DATA,
  GET_NEXT_QUESTION,
  INCREASE_SCORE,
  SET_ANSWER,
  RESET_DATA,
  SHOW_LOADER,
  HIDE_LOADER,
} from './type';
import { shuffleArray } from './../utils';

export const setDataAC = (payload) => {
  return {
    type: SET_DATA,
    payload,
  };
};

export const resetDataAC = (payload) => {
  return {
    type: RESET_DATA,
    payload,
  };
};

export const getNextQuestionAC = () => {
  return {
    type: GET_NEXT_QUESTION,
  };
};

export const fetchQuizQuestions = () => {
  return async (dispatch) => {
    dispatch(showLoaderAC());

    const res = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`);
    const json = await res.json();
    const questions = await json.results;

    const questionsWithMixedAnswers = questions.map((question) => ({
      ...question,
      answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
    }));

    dispatch(setDataAC(questionsWithMixedAnswers));
    dispatch(hideLoaderAC());
  };
};

export const increaseScoreAC = () => {
  return {
    type: INCREASE_SCORE,
  };
};

export const setAnswerAC = (answer) => {
  return {
    type: SET_ANSWER,
    payload: answer,
  };
};

export const showLoaderAC = () => {
  return { type: SHOW_LOADER };
};

export const hideLoaderAC = () => {
  return { type: HIDE_LOADER };
};
