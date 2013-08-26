'use strict';

sudokuApp.controller('SudokuCtrl', function SudokuCtrl($scope, sudokuGame) {

  	$scope.sung = "sungy";
  	$scope.difficulty = sudokuGame.difficulty;
  	$scope.grid = sudokuGame.solutionGrid();


});