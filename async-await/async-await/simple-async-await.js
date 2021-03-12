let havePattyInFridge = true;

let getPatty = function() {
  return new Promise(function(success, failure) {
    setTimeout(function() {
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
      if (haveBunsInStorage) {
        success('We got buns!');
      } else {
        failure('There are no buns')
      }
    }, 1000)
  })
}

let orderBurger = async function() {
  try {
    let [patty, buns] = await Promise.all([getPatty(), getBuns()]);
    console.log(`Got ${patty} and ${buns}`);
    let cookedPatty = await cookPatty(patty);
    serve(cookedPatty);
  } catch (error) {
    console.log(error);
  }
}

let serve = function(cookedBurger) {
  console.log(`Order up! ${cookedBurger}`);
}

orderBurger();