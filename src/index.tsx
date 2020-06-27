import React from "react";
import ReactDOM from "react-dom";
import Timer from "./observer";
import { observable } from "mobx";
import { Provider } from "mobx-react";
import Store from "./mobx/store";

const timerData = observable({
    secondsPassed: 0,
});

export type timerType = typeof timerData;

setInterval(() => {
    timerData.secondsPassed++;
}, 1000);

let store = new Store();

ReactDOM.render(
    <Provider store={store}></Provider>,
    document.getElementById("root")
);
