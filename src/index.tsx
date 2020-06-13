import React from "react";
import ReactDOM from "react-dom";
import ReduxCounter from "./Redux";
import { Provider } from "react-redux";
import store from "./Redux/Store";

ReactDOM.render(
    <Provider store={store}>
        <ReduxCounter />
    </Provider>,
    document.getElementById("root")
);
