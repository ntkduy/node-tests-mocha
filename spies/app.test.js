const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');
// app.__set__

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db',db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Tang Nguyen', 31);
    expect(spy).toHaveBeenCalledWith('Tang Nguyen', 31);
  });

  it('should call saveUser with user object', () => {
    var email = 'ntkduy1604@gmail.com';
    var password = 'abcd1234';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email,password});

  });
});
