# protractorSetupPOM

# setup up nodejs in your system
## Protractor is a Node.js program. To run Protractor, you will need to have Node.js installed. Check the version of node you have by running node --version. It should be greater than v0.10.0.
## Node.js comes with the Protractor npm package, which you can use to install Protractor.

# install protractor in your machine
npm install -g protractor
# you can check protractor version by using this command 
protractor --version

# start web-driver (you can find these commands in package.json)
* npm run wdm.start (this will start your webdriver server)
* npm run wdm.stop (this will stop your webdriver server)
* npm run wdm.update (this will update your webdriver server)

# running scripts
# go to directory on you project on Terminal on Command prompt
# then trigger this command
* npm run test (you can find this command in package.json)

# generating reports
# install allure and allure command line tool with below commands
* npm i jasmine-allure-reporter
* npm install -g allure-commandline --save-dev

# you can generate and open allure reports using below command, once you trigger below command you will be taken to your default browser where you can view allure report.
* allure generate allure-results --clean  && allure open