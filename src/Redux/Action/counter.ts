import { ADD } from "../Constant";
import { ActionCreator, AnyAction } from "redux";

export type AddType = ReturnType<typeof add>;

export const add: ActionCreator<AnyAction> = () => ({ type: ADD });

export default {
    add,
};
