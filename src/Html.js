import * as React from "react";
import { App } from "./App";

export const Html = () => (
    <html>
        <head>
            <meta charSet="utf-8" />
        </head>
        <body>
            <App />

            <script src="static/main.js"></script>
        </body>
    </html>
);
