'use strict';

sudokuApp.controller('BoardCtrl', function SudokuCtrl($scope, gameManager) {

	$scope.answersShown = false;

	$scope.board = gameManager.newBoard();

	$scope.answer = function(square) {
		console.log(square);
	}

	function showAnswers() {
		$scope.answersShown = true;
	}


});