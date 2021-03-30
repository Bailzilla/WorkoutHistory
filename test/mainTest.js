const assert = require('assert');
const request = require("supertest");
const app = require('../app');

describe('Routes: workouts', () => {
    describe('#GET /workouts', () => {
        it('should redirect to a list of workouts', () => {
            return request(app).get('/workouts')
            .then((res) => {
                assert(res.status, 302);
                assert.match(res.header.location, /\/workouts\/\d/);
 