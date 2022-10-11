const path = require("path");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/client.js",
    output: {
        path: path.join(__dirname, `dist-client`),
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
