import { combineReducers } from 'redux';
import sampleReducer from './sampleReducer';

const rootReducer = combineReducers({
  sampleReducer: sampleReducer,
});

export default rootReducer;
