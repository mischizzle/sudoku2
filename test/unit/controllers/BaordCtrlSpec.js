'use strict';

describe('BoardCtrl controller', function() {

	var ctrl;
  var scope;

  beforeEach(module('sudokuApp'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller("BoardCtrl", { $scope:scope });
  }));

  describe('Game board', function() {
  	it('should have a board', function() {
    	expect(scope.board.length).toBe(81);
  	});

  });
});

