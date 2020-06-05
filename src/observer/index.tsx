import React, { FC } from "react";
import { observer } from "mobx-react";
import { timerType } from "../index";

const Observer: FC<{ timeData: timerType }> = observer((props) => {
    return <span>Seconds passed: {props.timeData.secondsPassed}</span>;
});

export default Observer;
