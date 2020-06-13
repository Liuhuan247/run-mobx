import { ADD, ASYNC_ADD } from "../Constant";
import { ActionCreator, AnyAction, Dispatch } from "redux";

/**
 * 同步增加
 */
export const add: ActionCreator<AnyAction> = () => ({ type: ADD });

/**
 * 异步增加
 */
export const asyncAdd = () => {
    return (dispath: Dispatch) => {
        setTimeout(() => {
            dispath({ type: ASYNC_ADD });
        }, 1000);
    };
};

export type ActionTypes = ReturnType<typeof add> & ReturnType<typeof asyncAdd>;

export default {
    add,
    asyncAdd,
};
