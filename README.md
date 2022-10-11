# react-redux-suspense-issue

```bash
yarn
```

## server

```bash
rm -rf dist-server && webpack --config server.webpack.config.js --watch
nodemon dist-server/main.js
open localhost:8080
```

## client

```bash
rm -rf dist-client && webpack --config client.webpack.config.js --watch
```
