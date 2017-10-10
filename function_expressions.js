// Normal function statement
function sayHi(){
  console.log('hi');
}

//sayHi();

function callFunction(fun){
  fun();
}

// Function expression
var sayBye = function(){
  console.log('Bye');
}

callFunction(sayBye);
//sayBye();
