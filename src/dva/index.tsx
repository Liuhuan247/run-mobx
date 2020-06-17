import React, { FC } from "react";
import { connect } from "dva";
import { Dispatch } from "redux";

const Counter: FC<WrapperProps> = (props) => {
    return (
        <>
            <p>{props.count}</p>
            <button onClick={props.add}>增加</button>
            <button onClick={props.asyncAdd}>异步增加</button>
        </>
    );
};

const mapStateToProps = (state: any) => ({ ...state.counter });

const mapDispatchToProps = (dispatch: Dispatch) => ({
    add: () => dispatch({ type: "counter/increase" }),
    asyncAdd: () => dispatch({ type: "counter/asyncIncrease" }),
});

type WrapperProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
