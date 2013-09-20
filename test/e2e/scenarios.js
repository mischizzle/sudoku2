'use strict';

xdescribe('Sudoku game', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });

  describe('Answers container', function() {

  	it('should not display the answers upon loading', function() {
  		expect(element('#answers').css('display')).toBe("none");
  	});

  	describe('Clicking on an open square', function() {
  		beforeEach(function() {
	  		element('#board div:first-child').click();
	  	});

	  	it('should display the answer box', function() {
	  		expect(element('#answers').css('display')).toBe("block");
	  	});
  	});	  	
  });
});
