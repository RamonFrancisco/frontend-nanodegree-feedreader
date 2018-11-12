/* feedreader.js
*
* This is the spec file that Jasmine will read and contains
* all of the tests that will be run against your application.
*/

/* This is our first test suite - a test suite just contains
* a related set of tests. This suite is all about the RSS
* feeds definitions, the allFeeds variable in our application.
*/
describe('RSS Feeds', () => {
    /* This is our first test - it tests to make sure that the
    * allFeeds variable has been defined and that it is not
    * empty. Experiment with this before you get started on
    * the rest of this project. What happens when you change
    * allFeeds in app.js to be an empty array and refresh the
    * page?
    */
    it('are defined', () => {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
    });
    
    /* TODO: Write a test that loops through each feed
    * in the allFeeds object and ensures it has a URL defined
    * and that the URL is not empty. 
    */
    it('URL defined and it is not empty', () => {
        for( const feed of allFeeds) {
            expect(feed.url).toBeDefined();
            expect(feed.url).not.toBe(0);
        }
    });
    
    /* TODO: Write a test that loops through each feed
    * in the allFeeds object and ensures it has a name defined
    * and that the name is not empty.
    */
   it('Name defined and it is not empty', () => {
       for ( const feed of allFeeds ) {
           expect(feed.name).toBeDefined();
           expect(feed.name).not.toBe('');
       }
    });
});


/* TODO: Write a new test suite named "The menu" */
describe('The menu', () => {
    /* TODO: Write a test that ensures the menu element is
    * hidden by default. You'll have to analyze the HTML and
    * the CSS to determine how we're performing the
    * hiding/showing of the menu element.
    */
    let $body;
    beforeEach(() => {
        $body = document.querySelector('body');
    })
    
    it('the menu is hidden by default', () => {
        expect($body.classList).toContain('menu-hidden');
    })

    /* TODO: Write a test that ensures the menu changes
    * visibility when the menu icon is clicked. This test
    * should have two expectations: does the menu display when
    * clicked and does it hide when clicked again.
    */
    it('Menu open and closed on click icon', () => {
        const menuIcon = document.querySelector('.menu-icon-link');
        menuIcon.click();
        expect($body.classList.contains('menu-hidden')).toBe(false);
        menuIcon.click();
        expect($body.classList.contains('menu-hidden')).toBe(true);
    })
    
});

/* TODO: Write a new test suite named "Initial Entries" */

describe('Initial Entries', () => {
    /* TODO: Write a test that ensures when the loadFeed
    * function is called and completes its work, there is at least
    * a single .entry element within the .feed container.
    * Remember, loadFeed() is asynchronous so this test will require
    * the use of Jasmine's beforeEach and asynchronous done() function.
    */

    beforeEach(function(done){
        loadFeed(0, () => done());
    });


    it('has at least 1 entry', (done) => {
        expect(document.querySelector('article').classList).toContain('entry');
        done();
    });
})


/* TODO: Write a new test suite named "New Feed Selection" */
describe('New Feed Selection', () => {

    /* TODO: Write a test that ensures when a new feed is loaded
    * by the loadFeed function that the content actually changes.
    * Remember, loadFeed() is asynchronous.
    */

   let dataLoading1, dataLoading2;

    beforeEach(function(done){
        loadFeed(0, () => {
            dataLoading1 = $('.entry').text();
            loadFeed(1, () => {
                dataLoading2 = $('.entry').text();
                done();
            });
        });
    });

    /* TODO: Write a test that ensures when a new feed is loaded
        * by the loadFeed function that the content actually changes.
        * Remember, loadFeed() is asynchronous.
        */
    it('contents change after load', (done) => {
        expect(dataLoading1).not.toBe(dataLoading2);
        done();
    });
})

