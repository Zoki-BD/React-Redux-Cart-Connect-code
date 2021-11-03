import { combineReducers } from "redux";
import shopReducer from './Shopping/shopping-reducer'


const rootreducer = combineReducers({
   shop: shopReducer,
});

export default rootreducer;