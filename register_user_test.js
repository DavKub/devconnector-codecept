// Set of two scenarios
// Scenario 1: Create a new user and save him to db
// Scenario 2: Try to create a duplicate of user from the first scenario
// Expected result: Create a new user and getting "User already exists" alert afterwards

// User setup
const url = 'https://still-hollows-58221.herokuapp.com';
const registgerBtn = '//*[@id="root"]/section/form/input';
const name = 'Test11';
const password = '123456';

Feature('Register NEW user');

// Scenario needs to be asynchronous for us to be able to grab certain elements
Scenario(
  'Access landing page, click sign up, register user, enter dashboard',
  async I => {
    // Requests
    const grabbedUrl = await I.grabCurrentUrl(); // Awaiting grab method

    // Navigate to Register page and fill in all credentials
    I.amOnPage(url);
    I.click('Sign Up');
    I.fillField('name', name);
    I.fillField('email', `${name}@test.sde`);
    I.fillField('password', password);
    I.fillField('password2', password);

    I.seeElement(registgerBtn) && I.click(registgerBtn); // Short Circuit Conditional with &&

    if (!grabbedUrl.includes('/dashboard')) {
      // Desired outcome
      I.see(`Welcome ${name}`);
      console.log(
        `Registration has been successful, we created new user ${name}.`
      );
    } else {
      // NOT desired outcome
      const grabbedAlert = await I.grabTextFrom('.alert'); // Grab text from Bootstrap's alert class element
      console.log(grabbedAlert);
    }
  }
);

// Now we should have a new user put to our db
// Time to check if it's true
// We should get danger alert with self-explanatory message

Feature('Register an existing user');

// Scenario needs to be asynchronous for us to be able to grab certain elements
Scenario(
  'Access landing page, click sign up, register existing user, show alert',
  async I => {
    // Requests
    const grabbedUrl = await I.grabCurrentUrl(); // Awaiting grab method

    // Navigate to Register page and fill in all credentials while being duplicate
    I.amOnPage(url);
    I.click('Sign Up');
    I.fillField('name', name);
    I.fillField('email', `${name}@test.sde`);
    I.fillField('password', password);
    I.fillField('password2', password);

    I.seeElement(registgerBtn) && I.click(registgerBtn); // Short Circuit Conditional with &&

    if (!grabbedUrl.includes('/dashboard')) {
      // Desired outcome
      const grabbedAlert = await I.grabTextFrom('.alert'); // Grab text from Bootstrap's alert class element
      console.log(grabbedAlert);
    } else {
      // NOT desired outcome
      console.log('Registration has been successful, we created new user.');
    }
  }
);
