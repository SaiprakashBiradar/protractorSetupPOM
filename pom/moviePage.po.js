const wDFunctions = require ("../functions/webdriver-functions")

 let moviePage = function () {

      const movieName = element(by.id(`fileName`));


      this.getValueOfMovieName =  function(){
        return wDFunctions.getAttributeOfElement(movieName,"value")
     };
}
module.exports = new moviePage() ;