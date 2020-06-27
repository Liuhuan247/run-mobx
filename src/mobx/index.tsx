import React from "react";
import { observer, inject } from "mobx-react";

export default inject("store")(
    observer((props: any) => {
        return (
            <>
                <p>{props.store.count}</p>
                <button onClick={props.store.add}>增加</button>
                <button onClick={props.store.asyncAdd}>异步增加</button>
            </>
        );
    })
);
