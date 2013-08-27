'use strict';

describe('sudokuGame service', function() {

	var sudokuGame;
  var mockSolutionGenerator;
  var mockSudokuCell;

  beforeEach(module('sudokuApp'));

  beforeEach(function() {
  	module(function($provide) {
      mockSolutionGenerator = {
        matrix: "test",
        generateMatrix: function() {
          return [2, 6, 1, 8, 4, 9, 3, 5, 7, 3, 8, 9, 7, 5, 2, 6, 1, 4, 4, 5, 7, 1, 3, 6, 8, 9, 2, 6, 7, 2, 4, 9, 5, 1, 3, 8, 5, 1, 3, 6, 2, 8, 7, 4, 9, 8, 9, 4, 3, 7, 1, 2, 6, 5, 9, 4, 8, 2, 6, 3, 5, 7, 1, 1, 3, 5, 9, 8, 7, 4, 2, 6, 7, 2, 6, 5, 1, 4, 9, 8, 3]
        }
      };
      mockSudokuCell = {
        getInstance: function(solution){
          return {
            solution: solution,
            isPlayable: false,
            answer: 0,
            hints: [1, 2, 3, 4, 5, 6, 7, 8, 9]
          }
        }
      };

      $provide.value('solutionGenerator', mockSolutionGenerator);
      $provide.value('sudokuCell', mockSudokuCell);
    });

    inject(function($injector) {
      sudokuGame = $injector.get('sudokuGame');
    });
  });

  describe('difficulty', function() {
    it('should have a default difficulty level', function() {
      expect(sudokuGame.difficulty).toBe(1);
    });

    it('should change the difficulty level', function() {
      expect(sudokuGame.setDifficulty(2)).toBe(2);
    });
  });

  describe('solution', function() {
    it('should set the solution array', function() {
      expect(sudokuGame.setSolution().length).toBe(81);
    });
  });

  xdescribe('sudoku board', function() {
    it('should contain 81 cells', function() {
      sudokuGame.setBoard();
      expect(sudokuGame.board.length).toBe(81);
    });
  });

});

  