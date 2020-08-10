let canMakeBurger = false;

let orderBurger = new Promise(
  function(success, failure) {
    if (canMakeBurger) {
      success('We made a burger!');
    }
    else {
      failure('We cannot make a burger');
    }
  }
)

orderBurger
  .then(function(successValue) {
    console.log('Success!');
    console.log(successValue);
  })
  .catch(function(failureValue) {
    console.log('Failure!');
    console.log(failureValue);
  })