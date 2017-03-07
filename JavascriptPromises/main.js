let easyPromise = new Promise(function(resolve, reject){
    let randNum = Math.random();

    if (randNum >= 0.5) resolve("Success!");
    else if (randNum < 0.5) reject("Fail");

});

easyPromise.then(function(success) {
  console.log("Excellent! " + success);
}).catch(function(fail) {
  console.log("Oh no! " + fail);
})
