const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Use this to access DB URL.
const config = require('./config');

const app = express();
app.use(bodyParser.json());


if (process.env.NODE_ENV === 'production') {
    const appPath = path.join(__dirname, '..', 'build');
    app.use(express.static(appPath));

    app.get('*', function (req, res) {
        res.sendFile(path.resolve(appPath, 'index.html'));
    });
};

const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
    console.log(`Server started at PORT ${PORT}!!`);
});