'use strict';

const server = require('../app.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe ('Testing my HTTP server', () => {
  it('Should be able to respond to a POST to "/message"', async () => {
    let response = await request.post('/message?text=testWords&author=tester');

    expect(response.status).toEqual(200);
    expect(response.body[0].text).toEqual('testWords');
  });
});
