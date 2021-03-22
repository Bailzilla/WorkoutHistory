const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.redirect("/workouts")
});

module.exports = router;





// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Keith\'s Project' });
// });

// router.get('/users', function(req, res, next) {
//   res.render('index', { title: 'Keith\'s Project', name: 'keith' });
// });

// router.post('/users', function(req, res, next) {
//   res.render('index', { title:'Post Test', name: req.body.username });
// });



