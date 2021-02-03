const wDFunctions = require("../functions/webdriver-functions");

let homePage = function () {
  const homeLogo = element(
    by.xpath(`//a[@routerlink="/dashboard" and @href="/dashboard"]`)
  );
  const movieSearchBox = element(by.id(`searchField`));
  const movieSearchButton = element(by.xpath(`//button[@type="submit"]`));
  const moviesListed = element.all(
    by.xpath(`(//app-movies-list//app-grid-images//div[@class="row"])[1]/div`)
  );
  const moviesListedImages = element.all(
    by.xpath(`//*[@class="card-movie-img"]/a/img`)
  );
  const moviesListedNames = element.all(
    by.xpath(`//*[@class="card-movie-text"]/a/b`)
  );
  const itemsList = element(by.xpath(`//div[contains(text(),'Items List')]`));
  const continents = element(by.xpath(`//a[@href='/continents']`));
  const countries = element(by.xpath(`//a[@href='/countries']`));
  const cities = element(by.xpath(`//a[@href='/cities']`));
  const movies = element(by.xpath(`//a[@href='/movies']`));

  this.openSite = function (url) {
    wDFunctions.getUrl(url);
  };
  this.clickOnHomeLogo = function () {
    wDFunctions.clickOnElement(homeLogo);
  };
  this.searchMovie = function (movieName) {
    wDFunctions.enterText(movieSearchBox, movieName);
  };
  this.clickOnMovieSearchButton = function () {
    wDFunctions.clickOnElement(movieSearchButton);
  };
  this.getMoviesNames = function () {
    return wDFunctions.getElementText(moviesListedNames);
  };
  this.clickOnFirstMovie = function () {
    wDFunctions.clickOnElement(moviesListedNames.get(0));
  };
  this.clickOnItemsList = function () {
    wDFunctions.clickOnElement(itemsList);
  };
  this.verifyBreadcrumbOption = function () {
    browser.sleep(2000);
    expect(continents.isDisplayed()).toEqual(true);
    expect(countries.isDisplayed()).toEqual(true);
    expect(cities.isDisplayed()).toEqual(true);
    expect(movies.isDisplayed()).toEqual(true);
  };
};
module.exports = new homePage();
