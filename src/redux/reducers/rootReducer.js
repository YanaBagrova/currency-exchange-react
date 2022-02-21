import { combineReducers } from 'redux';
import { requestsReducer } from './requestsReducer';

export const rootReducer = combineReducers({
  requestsReducer,
});
