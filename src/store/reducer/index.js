import { combineReducers } from 'redux';
import Reducer from './Reducer';

const rootReducer = combineReducers({
    UserReducer: Reducer,
});

export default rootReducer;
