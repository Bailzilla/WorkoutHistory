const { doesNotMatch } = require('assert');
const assert = require('assert');
const request = require("supertest");
const app = require('../app');


describe('#GET /workouts', () => {
    it('should redirect to a list of all workout entries', () => {
        console.log('test running');
        return request(app).get('/')
            .then((res) => {
                assert.equal(res.status, 302);
                assert.match(res.header.location, /\/workouts/);
            });
    });
});

describe('#GET /workouts', () => {
    it('should render the New Workout page', () => {
        console.log('test running');
        return request(app).get('/workouts/new')
            .then((res) => {
                assert.equal(res.status, 200);
                assert.match(res.text, /<title>New Workout<\/title>/);
            });
    });
});

describe('#GET /workouts', () => {
    it('should render the workout correspoinding to the given id', () => {
        console.log('test running');
        return request(app).get('/workouts/1')
            .then((res) => {
                assert.equal(res.status, 200);
                assert.match(res.text, /<h1>Keep it moving!<\/h1>/);
            });
    });
});

describe('#GET /workouts', () => {
    it('should render the Edit Workout page', () => {
        console.log('test running');
        return request(app).get('/workouts/1/edit')
            .then((res) => {
                assert.equal(res.status, 200);
                assert.match(res.text, /<title>Edit Workout<\/title>/);
            });
    });
});

