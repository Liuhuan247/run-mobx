import React, { FC } from "react";
import useCounterModel from "./model/useCounter";

const Counter: FC = () => {
    const counter = useCounterModel();
    return (
        <div>
            <p>{counter.count}</p>
            <button onClick={counter.increment}>增加</button>
        </div>
    );
};
export default Counter;
