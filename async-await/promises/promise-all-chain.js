let havePattyInFridge = true;

let getPatty = function() {
  return new Promise(function(success, failure) {
    setTimeout(function() {
      console.log('inside get patty');
      if (havePattyInFridge) {
        success(havePattyInFridge);
      } else {
        failure('Failed to get patty');
      }  
    }, 3000);
  });
}

let cookPatty = function(patty) {
  // we need time to cook the patty!
  return new Promise(function(success, failure) {
    setTimeout(function() {
      if (patty) {
        success('We\'ve cooked the patty!');
      } else {
        failure('Failed to cook patty');
      }
    }, 1000)
  })
}

let haveBunsInStorage = false;

let getBuns = function() {
  return new Promise(function(success, failure) {
    setTimeout(function() {
      console.log('inside get buns');
      if (haveBunsInStorage) {
        success('We got buns!');
      } else {
        failure('There are no buns')
      }
    }, 1000)
  })
}

let orderBurger = function() {
  Promise.all([getPatty(), getBuns()])
    .then(function([patty, buns]){
      console.log(`finished getPatty: ${patty}`);
      console.log(`finished getBuns: ${buns}`);
      return cookPatty(patty);
    })
    //.then(cookPatty)
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