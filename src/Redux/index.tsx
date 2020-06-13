import React, { FC } from "react";
import { connect } from "react-redux";
import { StateType } from "./Reducer/counter";
import actions, { AddType } from "./Action/counter";

const mapStateToProps = (state: StateType) => state;

// 也可以写成这样
// const mapDispatchToProps = (dispath: Dispatch) => ({
//     // add: () => dispath(actions.add()),
//     ...actions,
// });
// type WrapperProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

type WrapperProps = ReturnType<typeof mapStateToProps> & AddType;

const Counter: FC<WrapperProps> = (props) => {
    return (
        <>
            <p>{props.count}</p>
            <button onClick={props.add}>增加</button>
        </>
    );
};

export default connect(mapStateToProps, { ...actions })(Counter);
