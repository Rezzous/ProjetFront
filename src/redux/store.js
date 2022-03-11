import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducer" 

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const reducers = combineReducers({
	userReducer,
});

const store = createStore(reducers, {}, composedEnhancer);

export default store;
