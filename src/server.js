import * as Express from "express";
import * as path from "path";
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import { Html } from "./Html";

const app = Express();

app.use("/static", Express.static(path.join(__dirname, "../dist-client/")));

app.get("/", (req, res) => {
    const stream = ReactDOMServer.renderToPipeableStream(<Html />, {
        onShellReady() {
            res.statusCode = 200;
            res.setHeader("Content-type", "text/html");
            stream.pipe(res);
        },
    });
});

app.listen(8080);
