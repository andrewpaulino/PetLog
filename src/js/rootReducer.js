import { combineReducers } from 'redux';
import testReducer from './containers/ExContainer/ExContainerReducers';

const rootReducer = combineReducers({
   testreducer: testReducer
    
});
    
export default rootReducer;
