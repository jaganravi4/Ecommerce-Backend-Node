const express = require('express');

const {PORT} = require("./config/server.config");
const apiRouter = require('./routes/index');

const startServer = () => {
    const app = express();

    app.use('/api', apiRouter);

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
}

startServer();