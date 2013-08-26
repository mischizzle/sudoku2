'use strict';

describe('solutionGenerator service', function() {

	var solutionGenerator;
	var matrix;
	var rowSample = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
	var row1, row2, row3, row4, row5, row6, row7, row8, row9;

  beforeEach(function() {
  	module('sudokuApp');
  	inject(function($injector) {
			solutionGenerator = $injector.get('solutionGenerator');
		});
  });

  beforeEach(function() {
		solutionGenerator.rootMatrix();
  });

  describe('root matrix', function() {
	  it('should create the root sudoku solution', function() {
	   	expect(solutionGenerator.matrix[0]).toBe(1);
	   	expect(solutionGenerator.matrix[25]).toBe(5);
	   	expect(solutionGenerator.matrix[72]).toBe(9);
	  });
  });

  describe('shuffle matrix', function() {
	  beforeEach(function() {
			solutionGenerator.shuffle();
	  });

	  describe('rows', function() {
		  it('should not duplicate values in a given row', function() {

		  	row1 = solutionGenerator.matrix.slice(0, 9).sort();
		  	row2 = solutionGenerator.matrix.slice(9, 18).sort();
		  	row3 = solutionGenerator.matrix.slice(18, 27).sort();
		  	row4 = solutionGenerator.matrix.slice(27, 36).sort();
		  	row5 = solutionGenerator.matrix.slice(36, 45).sort();
		  	row6 = solutionGenerator.matrix.slice(45, 54).sort();
		  	row7 = solutionGenerator.matrix.slice(54, 63).sort();
		  	row8 = solutionGenerator.matrix.slice(63, 72).sort();
		  	row9 = solutionGenerator.matrix.slice(72).sort();

		  	expect(row1).toEqual(rowSample);
		  	expect(row2).toEqual(rowSample);
		  	expect(row3).toEqual(rowSample);
		  	expect(row4).toEqual(rowSample);
		  	expect(row5).toEqual(rowSample);
		  	expect(row6).toEqual(rowSample);
		  	expect(row7).toEqual(rowSample);
		  	expect(row8).toEqual(rowSample);
		  });
	  });
  });
});



