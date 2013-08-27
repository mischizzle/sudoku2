'use strict';

sudokuApp.controller('SudokuCtrl', function SudokuCtrl($scope, sudokuGame) {

  	$scope.difficulty = sudokuGame.difficulty;
  	$scope.grid = sudokuGame.setSolution();

  	sudokuGame.setBoard();

  	console.log(sudokuGame.board);


});