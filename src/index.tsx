import React from "react";
import dva from "dva";
import model from "./dva/model";
import DvaCounter from "./dva";

const app = dva();

app.model(model);

app.router(() => <DvaCounter />);

app.start("#root");

// ReactDOM.render(
//     <Provider store={store}>
//         <ReduxCounter />
//     </Provider>,
//     document.getElementById("root")
// );
