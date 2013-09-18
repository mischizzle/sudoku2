'use strict';

describe('gamgManager service', function() {

	var gameManager;
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
      gameManager = $injector.get('gameManager');
    });
  });

  describe('new game', function() {

  var game;

    describe('creating the board', function() {
      var gameBoard;

      beforeEach(function() {
        gameBoard = gameManager.createBoard();
      });

      it('should create the game board', function(){
        expect(gameBoard.length).toBe(81);
      });

      describe('game board square properties', function() {

        it('should indicate playability', function() {
          expect(gameBoard[0].hasOwnProperty("isPlayable")).toBe(true);
        });

        it('should have a solution', function() {
          expect(gameBoard[0].hasOwnProperty("solution")).toBe(true);
        });

        it('should have a user answer', function() {
          expect(gameBoard[0].hasOwnProperty("answer")).toBe(true);
        });

        it('should have a set of hints', function() {
          expect(gameBoard[0].hints).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });
      });
    });

    describe('assigning the solution to the board', function() {


    });
  });
});