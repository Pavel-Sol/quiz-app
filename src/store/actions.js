import { SET_DATA, GET_NEXT_QUESTION } from './type';
import { shuffleArray } from './../utils';

export const setDataAC = (payload) => {
  return {
    type: SET_DATA,
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
    const res = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`);
    const json = await res.json();
    const questions = await json.results;

    const questionsWithMixedAnswers = questions.map((question) => ({
      ...question,
      answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
    }));

    dispatch(setDataAC(questionsWithMixedAnswers));
  };
};
