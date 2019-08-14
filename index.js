const express =  require('express');
require('dotenv').config();
const bodyParser = require('body-parser')

const routes = require('./routes/');

const app = express();
const port = process.env.PORT || '3000';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(port, () => {
    console.log(`API - http://localhost:${port}`);
});
