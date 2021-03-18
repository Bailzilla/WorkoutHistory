var express = require('express');
var router = express.Router();
const Workout = require('../models').Workout;

/* Handler function to wrap each route. */
function asyncHandler(cb){
  return async(req, res, next) => {
    try {
      await cb(req, res, next)
    } catch(error){
      // Forward error to the global error handler
      next(error);
    }
  }
}


/* POST create Workout. */
router.post('/', asyncHandler(async (req, res) => {
  let workout;
  try {
    workout = await Workout.create(req.body);
    res.render('index', { title:'Post Test', name: req.body.username })
  } catch (error) {
    if(error.name === "SequelizeValidationError") {
      workout = await Workout.build(req.body);
      res.render("workouts/new", { workout, errors: error.errors, title: "New Workout" })
    } else {
      throw error;
    }  
  }
}));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Keith\'s Project' });
});

router.get('/users', function(req, res, next) {
  res.render('index', { title: 'Keith\'s Project', name: 'keith' });
});

router.post('/users', function(req, res, next) {
  res.render('index', { title:'Post Test', name: req.body.username });
});


module.exports = router;
