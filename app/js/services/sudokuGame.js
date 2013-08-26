'use strict';

sudokuApp.factory('sudokuGame', function(solutionGenerator) {
	
	return {
		
		difficulty: 1,
		game: { grid: [] },

		newGame: function() {
			var solutionGrid = this.solutionGrid();
			this.game.grid = solutionGrid;
		},

		setDifficulty: function(newDifficulty) {
			this.difficulty = newDifficulty;
		},		

		solutionGrid: function() {
			var solution = solutionGenerator.generateMatrix();
			return solution;
		},

		cell: function(answer, guess, inPlay) {
			var cellObj = {
											answer: answer,
											guess: guess,
											inPlay: inPlay
										}
			return cellObj;
		}
	}
});

