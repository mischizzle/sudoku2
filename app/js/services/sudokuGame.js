'use strict';

sudokuApp.factory('sudokuGame', function(solutionGenerator, sudokuCell) {

	return {
		
		difficulty: 1,
		solutionArr: [],
		board: {},

		// newGame: function() {
		// 	var solutionGrid = this.solutionGrid();
		// 	this.game.grid = solutionGrid;
		// },

		setDifficulty: function(value) {
			return this.difficulty = value;
		},		

		setSolution: function() {
			return this.solutionArr = solutionGenerator.generateMatrix();
		},

		setBoard: function() {
			var cellName;

			for(var i=0; i<this.solutionArr.length; i++) {
				cellName = "cell" + i;
				this.board[cellName] = sudokuCell.getInstance(i);
			}			
		}
	}
});

