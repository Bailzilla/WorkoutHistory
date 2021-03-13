const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

app.get('/',(req, res) => {
    res.render('index',{name:req.cookies.username});
});

// app.get('/user',(req, res) => {
//     res.render('user',{name:"Keith", email:"kb@test.com"});
// });

// app.post('/',(req, res) => {
//     res.render('index',{name:"Keith", email:"kb@test.com"});
// });

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    res.render('login', { name: req.body.username});
});

// adds: CRUD for users with name and email, connect workouts to users

app.listen(3000, console.log('app listening on port 3000'));