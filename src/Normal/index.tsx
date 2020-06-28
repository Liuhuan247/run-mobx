import React, { FC, useState } from "react";

const NormalCounter: FC = () => {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count + 1);
    };
    const increaseAsync = () => {
        setTimeout(() => {
            setCount(count + 1);
        }, 1000);
    };
    return (
        <>
            <p>{count}</p>
            <button onClick={increase}>增加</button>
            <button onClick={increaseAsync}>异步增加</button>
        </>
    );
};

export default NormalCounter;
