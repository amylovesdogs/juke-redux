import {SET_LYRICS} from '../constants';

const initialState = { lyrics: '' };

export default function rootReducer (prevState = initialState, action) {
  if (!action) return prevState;

  switch (action.type) {
    case SET_LYRICS: {
      return Object.assign({},prevState,{lyrics: action.lyrics});
    }
    default:
      return prevState;
  }
}

