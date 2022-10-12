import * as Redux from "redux";
import { Suspense } from "react";
import * as React from "react";

const initialState = { count: 0 };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "increment":
            return {
                count: state.count + 1,
            };
        default:
            return state;
    }
};
const store = Redux.createStore(reducer);

export const App = () => {
    React.useEffect(() => {
        React.startTransition(() => {
            store.dispatch({ type: "increment" });
        });
    }, []);

    const count = React.useSyncExternalStore(
        store.subscribe,
        () => store.getState().count,
        () => initialState.count
    );

    return (
        <>
            <div>Count: {count}</div>

            <Suspense fallback={<div>Loading…</div>}>
                <div>Loaded!</div>
            </Suspense>
        </>
    );
};
