import * as Redux from "redux";
import * as ReactRedux from "react-redux";
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

const _Inner = ({ count }) => (
    <>
        <div>Count: {count}</div>

        <Suspense fallback={<div>Loading…</div>}>
            <div>Loaded!</div>
        </Suspense>
    </>
);
const Inner = ReactRedux.connect((state) => ({ count: state.count }))(_Inner);

export class App extends React.Component {
    componentDidMount() {
        React.startTransition(() => {
            store.dispatch({ type: "increment" });
        });
    }

    render() {
        return (
            <ReactRedux.Provider store={store} serverState={initialState}>
                <Inner />
            </ReactRedux.Provider>
        );
    }
}
