const GET_DATA = 'GET_DATA';

const defaultState = {
  data: null,
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { state, data: action.payload };

    default:
      return state;
  }
};

export const getDataAC = (payload) => {
  return {
    type: GET_DATA,
    payload,
  };
};
