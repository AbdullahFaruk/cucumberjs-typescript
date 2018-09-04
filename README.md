## Purchase test using cucumber and typescript with protractor  

#### Pre-requisites
1.NodeJS installed globally in the system.
https://nodejs.org/en/download/

2.Chrome installed.

#### Setup Scripts
* Clone the repository into a folder
* Go inside the folder and run following command from terminal/command prompt
```
npm install 
```
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

#### Run Scripts

* First step is to fire up the selenium server which could be done in many ways,  **webdriver-manager** proves very handy for this.The below command should download the **chrome & gecko driver** binaries locally for you!

```
npm run webdriver-update
``` 

* Then you should start your selenium server in a different terminal (always on the same folder. One terminal for selenium webdriver and the other for node  "test" command).
```
npm run webdriver-start
```

* Then start the tests!!!!!
```
npm test
```

#### Reports

* Reports are generated in reports/html folder.
* Two scenarios will pass, and the third one will fail to show the failure screenshot on the reporter.
* Open the .html report with your favorite browser.
* Validation is done following the cucumber BDD framework, where all assertions are done on the THEN with no actions after that.

