import { Reducer } from "redux";
import { ADD, ASYNC_ADD } from "../Constant";

export interface StateType {
    count: number;
}

export const initialState: StateType = {
    count: 0,
};

const counterReducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
        case ASYNC_ADD:
            return {
                count: state.count + 1,
            };
        default:
            return state;
    }
};

export default counterReducer;
