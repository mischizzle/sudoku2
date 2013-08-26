'use strict';

describe('sudokuGame service', function() {

	var sudokuGame;
  var mockSolutionGenerator;

  beforeEach(module('sudokuApp'));

  beforeEach(function() {
  	module(function($provide) {
      mockSolutionGenerator = {
        matrix: "test",
        generateMatrix: function() {
          return [2, 6, 1, 8, 4, 9, 3, 5, 7, 3, 8, 9, 7, 5, 2, 6, 1, 4, 4, 5, 7, 1, 3, 6, 8, 9, 2, 6, 7, 2, 4, 9, 5, 1, 3, 8, 5, 1, 3, 6, 2, 8, 7, 4, 9, 8, 9, 4, 3, 7, 1, 2, 6, 5, 9, 4, 8, 2, 6, 3, 5, 7, 1, 1, 3, 5, 9, 8, 7, 4, 2, 6, 7, 2, 6, 5, 1, 4, 9, 8, 3]
        }
      };
      $provide.value('solutionGenerator', mockSolutionGenerator);
    });

    inject(function($injector) {
      sudokuGame = $injector.get('sudokuGame');
    });
  });


  it('should have a difficulty level', function() {
   	expect(sudokuGame.difficulty).toBe(1);
  });

  describe('solution grid', function() {
  	it('should contain a solution array', function() {
	  	expect(sudokuGame.solutionGrid().length).toBe(81);
	  });
  });
});

  