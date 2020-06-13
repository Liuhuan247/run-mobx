import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CounterReducer from "../Reducer/counter";

let store = createStore(CounterReducer, applyMiddleware(thunk));

export default store;
