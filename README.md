# devconnector-codecept

Automated test suite made for DevConnector app with CodeceptJS

### Install CodeceptJS and Puppeteer (--save should not be mandatory with npm 5+)

> npm install codeceptjs puppeteer --save

### Initialize codeceptJS in current folder

> npx codeceptjs init

### Run all tests from current dir

> npx codeceptjs run

### Load config and run tests from test dir

> npx codeceptjs run -c test

### Run only tests with "signin" word in name

> npx codeceptjs run --grep "signin"
