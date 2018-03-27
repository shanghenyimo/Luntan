const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();

app.use('/public',express.static('./public/'));
app.use('/node_modules',express.static('./node_modules/'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.engine('html',require('express-art-template'));
app.use(router);

app.listen(3000, () => console.log('app listening on port 3000!'))