let orderBurger = new Promise(
  function(success, failure) {
    failure('We\'ve failed');
  }
)

orderBurger
  .then(function(successValue) {
    console.log('SUCCESS');
    console.log(successValue);
  })
  .catch(function(failureMessage) {
    console.log('FAILURE');
    console.log(failureMessage);
  })