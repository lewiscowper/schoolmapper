'use strict';

describe('Service: Getschools', function () {

  // load the service's module
  beforeEach(module('genericApp'));

  // instantiate service
  var Getschools;
  beforeEach(inject(function (_Getschools_) {
    Getschools = _Getschools_;
  }));

  it('should do something', function () {
    expect(!!Getschools).toBe(true);
  });

});
