const express = require('express');
const app = express();

const port = process.env.PORT || 3000;  //process.env.PORT is for heroku deploy purpose


const config=require('./config/config.json');

const middleware=require('./middleware/middleware')
app.use(middleware);


app.listen(port, () => console.log(`url-shortener listening on port ${config.app.port}!`));