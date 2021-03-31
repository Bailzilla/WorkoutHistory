const assert = require('assert');
const request = require("supertest");
const app = require('../app');


describe('#GET /', () => {
    it('should redirect to a list of all workout entries', () => {
        return request(app).get('/')
            .then((res) => {
                assert.equal(res.status, 302);
                assert.match(res.header.location, /\/workouts/);
            });
    });
});

describe('#GET /workouts/new', () => {
    it('should render the New Workout page', () => {
        return request(app).get('/workouts/new')
            .then((res) => {
                assert.equal(res.status, 200);
                assert.match(res.text, /<title>New Workout<\/title>/);
            });
    });
});

describe('#GET /workouts/1', () => {
    it('should render the workout correspoinding to the given id', () => {
        return request(app).get('/workouts/1')
            .then((res) => {
                assert.equal(res.status, 200);
                assert.match(res.text, /<h1>Keep it moving!<\/h1>/);
            });
    });
});

describe('#GET /workouts/1/edit', () => {
    it('should render the Edit Workout page', () => {
        return request(app).get('/workouts/1/edit')
            .then((res) => {
                assert.equal(res.status, 200);
                assert.match(res.text, /<title>Edit Workout<\/title>/);
            });
    });
});

describe('#GET /workouts/1/delete', () => {
    it('should render the Delete Workout page', () => {
        return request(app).get('/workouts/1/delete')
            .then((res) => {
                assert.equal(res.status, 200);
                assert.match(res.text, /<input type="submit" value="Yes, I'm sure">/);
            });
    });
});


