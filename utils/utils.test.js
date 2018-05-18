const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);
      expect(res).toBe(44).toBeA('number');
    });
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    })
  })

  it('should square a number', () => {
    var res = utils.square(2);
    expect(res).toBe(4).toBeA('number');
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(3, (square) => {
      expect(square).toBe(9).toBeA('number');
      done();
    });
  });

  it('should expect some values', () => {
    // expect(12).toNotBe(11);
    // expect({name: 'Tang Nguyen'}).toEqual({name: 'Tang Nguyen'});
    // expect([2, 3, 4]).toInclude(2);
    expect({
      name: 'Tang Nguye',
      age: 25,
      location: 'Australia'
    }).toExclude({
      age: 24
    })
  });
});



it('should verify first and last names are set', () => {
  var user = {
    location: 'Western Australia',
    age: 31
  };
  var res = utils.setName(user, 'Duy NGUYEN');
  expect(res.firstName).toExist().toBeA('string');
  expect(res.lastName).toExist().toBeA('string');
});
