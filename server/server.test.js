const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {

  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
      .get('/')
      .expect(404)
      .expect((res) => {
        expect(res.body).toInclude({
          name: 'Todo app v1.0'
        })
      })
      .end(done);
    });
  });

  describe('GET /user', () => {
    it('should return \"Tang Nguyen\" in user list', (done) => {
      request(app)
      .get('/user')
      .expect(200)
      .expect((res) => {
        expect(res.body.userList).toInclude('Tang Nguyen')
      })
      .end(done);
    });
  });
});
