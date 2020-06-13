import { createStore } from "redux";
import CounterReducer from "../Reducer/counter";

let store = createStore(CounterReducer);

export default store;
