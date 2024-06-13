const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const { createApiDocs } = require('./src/config/swagger');
require('dotenv').config();
const _debug = require('debug')('debugging:debug');
const app = express();
app.use(bodyparser.urlencoded({ extended: true, limit: '50mb' }));;
app.use(bodyparser.json({ limit: '50mb' }));
const whitelist = [
    'http://localhost:5100',
    'http://54.179.41.122',
    'https://studiookc.com',
    'https://studiookc.com:5100',
    undefined,
    null
]
createApiDocs(app)

const corsOption = {
    origin: (origin, cb) => {
        _debug('origin %o', origin);
        if (whitelist.indexOf(origin) !== -1) {
            cb(null, true)
        } else {
            cb(new Error('Not allows by Cors'))
        }
    },
    optionsSuccessStatus: 200,
    preflightContinue: false,
    credentials: true
}

app.use(cors(corsOption));
app.use('/api', require('./src/api/Router'))

app.listen(process.env.PORT, () => {
    console.log(`Server is running port ${process.env.PORT}`)
});