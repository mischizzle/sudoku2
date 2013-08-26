'use strict';

xdescribe('SudokuCtrl controller', function() {

	var ctrl;
  var scope;

  beforeEach(module('sudokuApp'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller("SudokuCtrl", { $scope:scope });
  }));

  describe('Main page', function() {

  	it('should have the title', inject(function() {
    	expect(scope.sung).toEqual("sungy");
  	}));
  });
});

