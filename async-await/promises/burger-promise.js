let canMakeBurger = false;

// Library creators will be writing this code.
let orderBurger = new Promise(function (success, failure) {
  // If the async work finishes without an error, I MUST call the success callback
  if (canMakeBurger) {
    success('We made a burger!');
  }
  // If the async work finishes WITH an error, I MUST call the failure callback
  else {
    failure('We cannot make a burger');
  }
});

// WHEN I SEE THIS, I KNOW IT'S A PROMISE!!!!!!
orderBurger
  .then(function (successValue) {
    console.log('Success!');
    console.log(successValue);
  })
  .catch(function (failureValue) {
    console.log('Failure!');
    console.log(failureValue);
  });
