'use strict';

sudokuApp.factory('gameManager', function(solutionGenerator, boardSquare) {

	var BOARD_SQUARES = 81;

// 	CarManager.execute = function ( name ) {
//		return CarManager[name] && CarManager[name].apply( CarManager, [].slice.call(arguments, 1) );
//	};

	return {

		newBoard: function() {
			var newBoard = this.assignSolution(this.createBoard(), solutionGenerator.generateMatrix());
			//newBoard = 
		},

		createBoard: function() {
			var square;
			var gameBoard = [];

			for(var i=0; i<BOARD_SQUARES; i++) {
				square = boardSquare.newSquare();
				gameBoard.push(square);
			}	
			return gameBoard;	
		},

		setSolution: function(gameBoard, solution) {
			for(var i=0; i<BOARD_SQUARES; i++) {
				gameBoard[i].solution = solution[i];
			}
			return gameBoard;
		},

		setGameDifficulty: function(gameBoard, difficulty) {
			var allPossibleSquares = [];
			var randomSquare;

			for(var i=0; i<BOARD_SQUARES; i++) {
				allPossibleSquares[i] = i+1;
			}

			randomSquare = Math.random(1, allPossibleSquares.length);
		}
	}
});

