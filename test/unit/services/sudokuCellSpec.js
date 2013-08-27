'use strict';

xdescribe('sudokuCell service', function() {

	var sudokuCell;

	beforeEach(module('sudokuApp'));

	beforeEach(function(){
		inject(function($injector) {
      sudokuCell = $injector.get('sudokuCell');
    });
	});

	describe('cell properties', function() {

		it('should set a solution value', function() {
			sudokuCell.setSolution(5);
			expect(sudokuCell.solution).toBe(5);
		});

		it('should set playability', function() {
			sudokuCell.setPlayability(true);
			expect(sudokuCell.isPlayable).toBe(true);
		});

		it('should set the user value', function() {
			sudokuCell.setAnswer(4);
			expect(sudokuCell.answer).toBe(4)
		})
	});

});
