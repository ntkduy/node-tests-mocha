const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

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


it('should return \"Tang Nguyen\" in user list', (done) => {
  request(app)
    .get('/user')
    // .expect(404)
    .expect((res) => {
      expect(res.body.userList).toInclude('Tang N guyen')
    })
    .end(done);
});
