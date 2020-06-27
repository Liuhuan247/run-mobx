import React from "react";
import ReactDOM from "react-dom";
import MobxCounter from "./mobx";
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

export type StoreType = typeof store;

ReactDOM.render(
    <Provider store={store}>
        <MobxCounter />
    </Provider>,
    document.getElementById("root")
);
