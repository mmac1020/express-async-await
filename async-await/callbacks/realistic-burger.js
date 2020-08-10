const orderBurger = function(nextStep) {
  let gotBuns = false;
  getBuns(function (buns) {
    gotBuns = true;
    putCondimentsOnBuns(function(buns) {
      putLettuceOnCondiments(function(buns) {
        
      })
    })
  })
  getPatty(function (patty) {
    cookPatty(patty, function (cookedPatty) {
      console.log('Got into cookPatty');
      if (gotBuns) {
        putPattyBetweenBuns(buns, cookedPatty, function(burger) {
          nextStep(burger)
        })  
      }
    })
  })  
}

let serveBurger = function(burgerMessage) {
  console.log(burgerMessage);
}

orderBurger(serveBurger);