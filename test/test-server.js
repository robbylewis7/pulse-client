'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const mongoose = require('mongoose');

const expect = chai.expect;

const { app, runServer, closeServer } = require('../server');
const { User } = require('../users/models');
const { TEST_DATABASE_URL } = require('../config');

chai.use(chaiHttp);

//Test Static Assets
describe('Static assets', function () {
    it('GET to / should return status 200 and html', function () {
        return chai.request(app)
            .get('/')
            .then(function (res) {
                expect(res).to.have.status(200);
            });
    });

    // it('GET to /main should return status 200 and html', function () {
    //     return chai.request(app)
    //         .get('/teams')
    //         .then(function (res) {
    //             expect(res).to.have.status(200);
    //         });
    // });
});
