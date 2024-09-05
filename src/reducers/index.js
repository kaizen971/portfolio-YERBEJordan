import { combineReducers } from 'redux';

// Importez vos reducers ici
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
