export const GET_DATA = 'GET_DATA';
const SET_DATA = 'SET_DATA';

export const getData = () => ({
  type: GET_DATA,
});

export const setData = data => ({
  type: SET_DATA,
  data,
});

const initialState = {
  data: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      const {data} = action;
      return {...state, data};
    default:
      return state;
  }
};
