const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

// Use this to access DB URL.
const config = require('./config');

const userRoutes = require('./routes/users');

var url = config.DB_URI;
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log("Connected to database!");
}).catch(err => console.log(`Error connecting to database: ${err}`));

const app = express();
app.use(bodyParser.json());

app.use('/api/v1/users', userRoutes);

// if (process.env.NODE_ENV === 'production') {

    const appPath = path.join(__dirname, '..', 'build');
    app.use(express.static(appPath));

    app.get('*', function (req, res) {
        res.sendFile(path.resolve(appPath, 'index.html'));
    });
// };

const PORT = process.env.PORT || 3005;

app.listen(PORT, function () {
    console.log(`Server started at PORT ${PORT}!!`);
});

