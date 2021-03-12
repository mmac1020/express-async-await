let havePattyInFridge = true;

let getPatty = function() {
  return new Promise(function(success, failure) {
    setTimeout(function() {
      // console.log('inside get patty');
      if (havePattyInFridge) {
        success(havePattyInFridge);
      } else {
        failure('Failed to get patty');
      }  
    }, 1000);
  });
}

let cookPatty = function(patty) {
  // we need time to cook the patty!
  return new Promise(function(success, failure) {
    failure('Failed to cook patty');
    setTimeout(function() {
      if (patty) {
        success('We\'ve cooked the patty!');
      } else {
        failure('Failed to cook patty');
      }
    }, 1000)
  })
}

let haveBunsInStorage = true;

let getBuns = function() {
  return new Promise(function(success, failure) {
    setTimeout(function() {
      // console.log('inside get buns');
      if (haveBunsInStorage) {
        success('We got buns!');
      } else {
        failure('There are no buns')
      }
    }, 1000)
  })
}

let orderBurger = function() {
  getBuns()
    .then(function(gotBuns) {
      return getPatty()
    })
    .then(function(cookedPatty) {
      return cookPatty(cookedPatty);
    })
    .then(function(cookedBurger) {
      serve(cookedBurger);
    })
    .catch(function(error) {
      console.log(error);
    })
}

let serve = function(cookedBurger) {
  console.log(`Order up! ${cookedBurger}`);
}

orderBurger();