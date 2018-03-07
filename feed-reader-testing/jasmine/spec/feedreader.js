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


          //created a loop and checking the url toBeDefined and not empty
         it('all links are valid', function(){
           for(var i = 0; i < allFeeds.length; i++) {
             var feed = allFeeds[i];
             expect(feed.url).toBeDefined();
             expect(feed.url).not.toBe('');
           }
         });


         //created a loop and checking the name toBeDefined and not empty
         it('all feeds have a name', function(){
           for(var i = 0; i < allFeeds.length; i++) {
             var feed = allFeeds[i];
             expect(feed.name).toBeDefined();
             expect(feed.name).not.toBe('');
           }
         });
    });


    /* defined this suite named "The menu" */
    describe('the menu', function(){
        // checking if body has class 'menu-hidden'
       it('menu is hidden by default', function(){


         var hasclass = $('body').hasClass('menu-hidden');
         expect (hasclass).toBe(true);
       });

       // created variable for the button to trigger the click event
       // comparing hasClass between clicks

        it('menu icon is working', function(){
          var body = document.querySelector('body');
          var btn = document.querySelector('.menu-icon-link');
          btn.click();
          expect($('body').hasClass('menu-hidden')).toBe(false);
          btn.click();
          expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* suite for "Initial Entries" */
    describe('intial entries', function(){
      // created variable for .feed div
      // loaded new feed
      // get length of all .entry, store it in a var called feedsLength
      // expect feedsLength > 0 to be true

       var feedContainer = document.querySelector('.feed');
       beforeEach(function(done) {
         loadFeed(0, done);
       });

        it('should have links', function(done){
          var feedsLength = $('.feed .entry').length;
          expect(0 < feedsLength).toBe(true);
          done();
        });
    });


    /* suite for "New Feed Selection" */
    describe('new feed selection', function(){
      var before;
      var after;

      // making 2 ajax calls and storing the reference of the first header text
      // then comparing them
      // they should be different, since a different feed was loaded.

      beforeEach(function(done){
        loadFeed(1, function(){
          before = $('.entry').first().find('h2').text();
          loadFeed(2, function(){
            after = $('.entry').first().find('h2').text();
            done();
          });
        });
      });


      it('feeds are different', function(done){
        expect(before == after).toBe(false);
        done();
      });

    });

}());
