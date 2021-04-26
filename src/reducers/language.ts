import { Reducer } from 'redux';
import { EN } from '@/constants/languages';
import { SET_LANGUAGE } from '@/constants/reducers';

const languageReducer: Reducer<string> = (state = EN, { type, payload }) => {
  switch (type) {
    case SET_LANGUAGE:
      return payload.language;
    default:
      return state;
  }
};

export default languageReducer;
