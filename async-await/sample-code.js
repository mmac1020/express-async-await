// My first parameter is a callback for when this succeeds
// My second parameter is a callback for when this fails.
// const myFirstPromise = new Promise(function(value)
// {
//   console.log('here is what happens when I succeed')
// }
// , function(error) {
//   console.log('here is what happens when I fail')
// } )

// const myPreferredPromise = new Promise(function(success, failure) {

// })
const havePatties = true;
const haveBuns = true;

// Your libraries will write this code
let orderBurger = new Promise(function (success, failure) {
  if (havePatties) {
    if (haveBuns) {
      setTimeout(() => {
        success('I have made you a burger');
      }, 2000);
    } else {
      failure('I cannot make you a burger');
    }
  } else {
    failure('I cannot make you a burger');
  }
});

// So you can interact with this code
const promiseCallingFunction = async function () {
  // If I succeed, my successValue will be set to the Promise's success value.
  // If I fail, my await will throw an error
  try {
    // Whenever we have async/await or Promises, we will want to try/catch
    // because those operations can fail for any number of reasons
    const successValue = await orderBurger;
    console.log(successValue);
  } catch (failureValue) {
    // Catching them will allow you to fail but not crash
    console.log(failureValue);
  }
};

promiseCallingFunction();

for (let i = 0; i < 100; i++) {
  console.log(i);
}

// THIS IS A GLARING RED LIGHT FLASHING IN YOUR FACE TELLING
// YOU THAT THIS THING IS A PROMISE (.THEN!!!!!!!!!!!!!!)
// orderBurger
//   .then(function (successValue) {
//     console.log('I have succeeded!!!');
//     console.log(successValue);
//   })
//   .catch(function (failureValue) {
//     console.log('I have failed :(');
//     console.log(failureValue);
//   });
