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
