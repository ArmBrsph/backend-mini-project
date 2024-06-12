const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const { createApiDocs } = require('./src/config/swagger');
require('dotenv').config();

const app = express();
app.use(bodyparser.urlencoded({ extended: true, limit: '50mb' }));;
app.use(bodyparser.json({ limit: '50mb' }));
createApiDocs(app)

app.use('/api', require('./src/api/Router'))

app.listen(process.env.PORT, () => {
    console.log(`Server is running port ${process.env.PORT}`)
});