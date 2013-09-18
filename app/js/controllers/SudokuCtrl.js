'use strict';

sudokuApp.controller('SudokuCtrl', function SudokuCtrl($scope, gameManager) {

  	//$scope.difficulty = sudokuGame.difficulty;
  	//$scope.grid = sudokuGame.setSolution();

  	$scope.board = gameManager.newBoard();

});