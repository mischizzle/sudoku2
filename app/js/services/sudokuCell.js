'use strict';

sudokuApp.factory('sudokuCell', function() {

	var solution;

  var Cell = function(solution) {
  	this.solution = solution;
  	this.isPlayable = false;
    this.answer = 0;
    this.hints = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  };

  Cell.prototype.setSolution = function(value) {
  	this.solution = value;
  }

  Cell.prototype.setPlayability = function(value) {
  	this.isPlayable = value;
  }	

  Cell.prototype.setAnswer = function(value) {
  	this.answer = value;
  } 

  return {

    getInstance: function(solution) {
      return new Cell(solution);
    }
  }
});
