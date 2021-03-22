const express = require('express');
const router = express.Router();
const Workout = require('../models').Workout;

/* Handler function to wrap each route. */
function asyncHandler(cb){
  return async(req, res, next) => {
    try {
      await cb(req, res, next)
    } catch(error){
      res.status(500).send(error);
    }
  }
}

/* GET articles listing. */
router.get('/', asyncHandler(async (req, res) => {
  const workouts = await Workout.findAll({ order: [["createdAt", "DESC"]] });
  res.render("workouts/index", { workouts, title: "Keep it moving!" });
}));

/* Create a new workout form. */
router.get('/new', (req, res) => {
  res.render("workouts/new", { workout: {}, title: "New Workout" });
});

/* POST create workout. */
router.post('/', asyncHandler(async (req, res) => {
  const workout = await Workout.create(req.body);
  res.redirect("/workouts/" + workout.id);
}));

/* Edit workout form. */
router.get("/:id/edit", asyncHandler(async(req, res) => {
  const workout = await Workout.findByPk(req.params.id);
  res.render("workouts/edit", { workout, title: "Edit Workout" });
}));

/* GET individual workout. */
router.get("/:id", asyncHandler(async (req, res) => {
  const workout = await Workout.findByPk(req.params.id);
  res.render("workouts/show", { workout, title: workout.title }); 
})); 

/* Update an workout. */
router.post('/:id/edit', asyncHandler(async (req, res) => {
  const workout = await Workout.findByPk(req.params.id);
  await workout.update(req.body);
  res.redirect("/workouts/" + workout.id);
}));

/* Delete workout form. */
router.get("/:id/delete", asyncHandler(async (req, res) => {
  const workout = await Workout.findByPk(req.params.id);
  res.render("workouts/delete", { workout, title: "Delete Workout" });
}));

/* Delete individual workouts. */
router.post('/:id/delete', asyncHandler(async (req ,res) => {
  const workout = await Workout.findByPk(req.params.id);
  await workout.destroy();
  res.redirect("/workouts");
}));

module.exports = router;