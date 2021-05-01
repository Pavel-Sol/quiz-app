import { GET_DATA, GET_NEXT_QUESTION } from './type';

export const getDataAC = (payload) => {
  return {
    type: GET_DATA,
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
    dispatch(getDataAC(questions));
  };
};
