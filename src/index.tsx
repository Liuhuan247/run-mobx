import React from "react";
import ReactDOM from "react-dom";
import MobxCounter from "./mobx";
import { Provider } from "mobx-react";
import Store from "./mobx/store";

let store = new Store();

ReactDOM.render(
    <Provider store={store}>
        <MobxCounter />
    </Provider>,
    document.getElementById("root")
);
