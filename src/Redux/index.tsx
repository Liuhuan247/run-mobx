import React, { FC } from "react";
import { connect } from "react-redux";
import { StateType } from "./Reducer/counter";
import actions from "./Action/counter";
import { Dispatch, bindActionCreators } from "redux";

const mapStateToProps = (state: StateType) => state;

// 也可以写成这样
// const mapDispatchToProps = (
//     dispatch: ThunkDispatch<StateType, void, Action>
// ) => ({
//     add: () => dispatch(actions.add()),
//     async: () => dispatch(actions.asyncAdd()),
// });

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(actions, dispatch);

type WrapperProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

const Counter: FC<WrapperProps> = (props) => {
    return (
        <>
            <p>{props.count}</p>
            <button onClick={props.add}>增加</button>
            <button onClick={props.asyncAdd}>异步增加</button>
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
