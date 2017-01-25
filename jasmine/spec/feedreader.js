/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


      
		it('Feed URL defined', function() {
			allFeeds.forEach(function(allFeeds){
			expect(allFeeds.url).toBeDefined();
            expect(allFeeds.url.length).not.toBe(0);	
        });
            
        });

        
         it('Name defined', function() {
			allFeeds.forEach(function(allFeeds){
			expect(allFeeds.name).toBeDefined();
            expect(allFeeds.name.length).not.toBe(0);	
        });
            
        });

    });

    describe('The menu', function(){
    	it('had hidden menu by default', function(){
    		expect($('body').hasClass('menu-hidden')).toBe(true);
    	});
    
   
		it('display when clicked', function(){
			$('.menu-icon-link').click();
    		expect($('body').hasClass('menu-hidden')).toBe(false);
    	});
         
          it('not display when clicked again', function(){
			$('.menu-icon-link').click();
    		expect($('body').hasClass('menu-hidden')).not.toBe(false);
    	});
});
    	describe('Initial Entries', function(){
		var entry;
		beforeEach(function(done){
			loadFeed(0, done);
		});
    	
    	it('at least a single entry', function(){
    		expect($('.feed').contents().find('.entry').size()).not.toBe(0);
    		
    	});
    });
        
	describe('New Feed Selection', function(){
		var content;
		beforeEach(function(done){
			loadFeed(1, function(){
				content = $('.feed').html();
				done();
			});
		});
		it('new feed is loaded', function(done){
			loadFeed(0, function(){
				expect($('.feed').html()).not.toEqual(content);
				done();
			});
		});
	
     
         });
     
}());
