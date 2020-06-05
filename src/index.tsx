import React, { FC } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

let appState = observable({
    timer: 0,
    resetTimer: action(() => {
        appState.timer = 0;
    }),
});

interface IProps {
    appState: typeof appState;
    counter: typeof counter;
}

setInterval(
    action(() => {
        appState.timer += 1;
    }),
    1000
);

let counter = {
    count: 0,
};

setInterval(() => {
    counter.count++;
}, 1000);

const TimerView: FC<IProps> = (props) => {
    return (
        <>
            <Button appState={appState} />
            <Counter counter={props.counter} />
            <div>{props.counter.count}</div>
        </>
    );
};

const Button: FC<{ appState: typeof appState }> = observer((props) => {
    const onReset = () => {
        props.appState.resetTimer();
    };
    return (
        <button onClick={onReset}>
            Seconds passed: {props.appState.timer}
        </button>
    );
});

interface CounterProps {
    counter: typeof counter;
}

const Counter: React.FC<CounterProps> = (props) => (
    <p>{props.counter?.count}</p>
);

ReactDOM.render(
    <TimerView appState={appState} counter={counter} />,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
