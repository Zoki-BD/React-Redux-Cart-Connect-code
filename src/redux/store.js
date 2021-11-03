import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';//za da imame redux vo console pregledot


const store = createStore(rootReducer, composeWithDevTools() //if with npm install redux-devtools-extension

   //if with direct extension
   //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
)

export default store;