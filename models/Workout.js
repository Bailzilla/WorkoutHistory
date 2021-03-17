'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Workout extends Sequelize.Model {}
  Workout.init({
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    body: Sequelize.TEXT
  }, { sequelize });

  return Workout;
};