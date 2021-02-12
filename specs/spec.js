const homePage = require ("../pom/homePage.po");
const moviePage = require ("../pom/moviePage.po");

const {waitForElementDisplayed} = require ("../functions/webdriver-functions");
const testData = require ("../testData/movieData.json")


describe('Rewaa Tech assignment suite', function() {
  
  beforeEach(function () {
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().maximize();
    homePage.openSite(testData.environment);
  });

  it("verify page Tittle", function () {
    expect(browser.getTitle()).toEqual(testData.pageTitle);
  });
  it("verify movie listed with name", function () {
    expect(homePage.getMoviesNames()).toContain(testData.searchMovie);
  });
  it("verify correct movies are populated after search", function () {
    homePage.searchMovie(testData.searchMovie);
    homePage.clickOnMovieSearchButton();
    expect(homePage.getMoviesNames()).toContain(testData.searchMovie);
  });
  it("verify selecting a movie takes you to correct movie page", function () {
    homePage.searchMovie(testData.searchMovie);
    homePage.clickOnMovieSearchButton();
    homePage.clickOnFirstMovie();
    expect(moviePage.getValueOfMovieName()).toContain(testData.searchMovie);
  });
  it('verify breadcrumb shows options',function(){
    homePage.clickOnItemsList();
    homePage.verifyBreadcrumbOption();
  })
});