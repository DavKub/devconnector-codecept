Feature('Accessing homepage');

Scenario('access the landing page of devconnector hosted on Heroku', I => {
  I.amOnPage('/');
});
