# Workout History

To begin: 
1. clone https://github.com/Bailzilla/WorkoutHistory
2. run `npm install`

To view in browser:
1. run `npm start`
2. navigate your browser to http://localhost:3000/

To test:
1. run `npm test`


## What is this project?
An ExpressJS Backend Application that utilizes Sequelize to communicate with a Sqlite database. I've encorporated Mocha and Chai to run tests on the api routes. My inspiration was to have a place where I could track my workouts. This allows the user to create, edit, and delete workouts from their saved history. 

### Requirements
1. Build an ExpressJS Backend Application 

A. Build at least three routes
In the routes folder there are 2 files with a combined 9 total routes. They use either GET or POST methods to performd CRUD operations. As well as using Sequelize, the routes render data in the browser using the PUG templating engine. 

B. Each endpoint must have at least one meaningful unit test 
All of the tests are in test/mainTest.js - there are 5 total tests, 1 for each of the different GET routes. The tests have been written to ensure that the proper pages are being rendered upon url request.

2. Project is uploaded to GitHub with over 5 commits

3. Project includes this README