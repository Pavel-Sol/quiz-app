import { GET_DATA, GET_NEXT_QUESTION } from '../type';

const defaultState = {
  data: null,
  questionNum: 0,
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, data: action.payload };

    case GET_NEXT_QUESTION:
      return { ...state, questionNum: state.questionNum + 1 };

    default:
      return state;
  }
};
