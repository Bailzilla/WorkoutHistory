const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.set('view engine', 'pug');

app.get('/',(req, res) => {
    res.render('index',{name:"Keith"});
});

app.post('/',(req, res) => {
    res.render('index',{name:"Keith"});
});

app.listen(3000, console.log('app listening on port 3000'));