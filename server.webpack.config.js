const path = require("path");

module.exports = {
    target: "node",

    mode: "development",
    devtool: "source-map",
    entry: "./src/server.js",
    output: {
        path: path.join(__dirname, `dist-server`),
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [["@babel/preset-react"]],
                    },
                },
            },
        ],
    },
};
