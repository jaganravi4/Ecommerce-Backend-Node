const express = require('express');
const {PORT} = require("./config/server.config");

const startServer = () => {
    const app = express();

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
}

startServer();