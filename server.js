const { response } = require('express');
const express = require('express');
const app = express();
//optional line 4 and .env and .gitignor
//require('dotenv').config();//this is step one.  It looks for a file called dotenv. step 2 enter PORT 3000 in env file
const PORT = 3000;


function getSum (num1, num2) {
  return parseInt(num1) + parseInt(num2)
}
function getDiff (num1, num2) {
  return parseInt(num1) - parseInt(num2)
}

function getQuot (num1, num2) {
  return parseInt(num1)/parseInt(num2)
}

function multiplyedAnswer (num1, num2) {
  return parseInt(num1) * parseInt(num2)
}


//params
//params come in as strings, so to add them together as numbers they must be parseInt'ed 
app.get('/calc/:num1/:num2', (req, res) => { 
  const sum = parseInt(req.params.num1) + parseInt(req.params.num2)//solving the requested parameters of num1 + num2 and making it an integers/number and not a string.
  res.send("the sum is " + sum);//send this response back
});
//send in the "arguments" to browser:  localhost:3000/calc/4/4


//query
//req.query   /  (request.query) anything after the ? then enter a key=value
//localhost:3000/someroute?operation=add
//Check in Terminal for the console.log of req.query
//It gives us back the key-value pair from our URL in the console
app.get('/someroute', (req, res) => {
  console.log("req.query: ", req.query); //test to see the req,query in terminal. Its an empty object.
  res.send('someroute accessed');//sending this message to browser.
});

//app.get('/calcquery/:num1/:num2', (req, res) => {
//	const sum = parseInt(req.params.num1) + parseInt(req.params.num2)//int of num1 + int of num2
//  res.send("the sum is " + sum)
//});

//localhost:3000/calcquery/5/3?operation=add
//operation=subtract
//operation=multiply
//operation=divide

app.get('/calcquery/:num1/:num2', (req, res) => { 
  if (req.query.operation === "add"){
  const sum = getSum(req.params.num1, req.params.num2)
  res.send("The sum is going to be " + sum)
}
  else if(req.query.operation === "multiply") {
      const multiply = multiplyedAnswer(req.params.num1, req.params.num2)
      res.send("The sum is going to be " + multiply)
  }
  else if(req.query.operation === "divide") {
      const quotient = getQuot(req.params.num1, req.params.num2)
      res.send("The sum is going to be " + quotient)
  }

  else if(req.query.operation === "subtract") {
      const difference = getDiff(req.params.num1, req.params.num2)
      res.send("The sum is going to be " + difference)
  }
  else (
      res.send("no operation.")
  )
})



app.listen(PORT, () => {
	console.log('Express is listening on port: ', PORT);
})

//localhost:3000/calcquery/2/2?operation=

//optional
//(process.env.PORT,()=>) in order to use the dotenv variable
// run npm i dotenv in the terminal
//anything with  . infront are ignored files


//
//const num1 = parseInt(request.params.num1);
//const num2 = parseInt(request.params.num2);
//const operation = request.query.operation); // the value of operation=



//app.get("/calcquery/:numOne/:numTwo", (request, response) => {
    // console.log(
    //     request.params.numOne, 
    //     request.params.numTwo, 
    //     `the object type of ${request.params.numOne} which is on the URL is ${}`,
    // )
    //anything typed inside the URL will always be a string

    //const num1 = parseInt(request.params.numOne);
    //const num2 = parseInt(request.params.numTwo);
    //const operation = request.query.operation;

    //if(operation === 'add'){
    //    response.send(`the sum is ${num1  + num2}`)
    //} else if(operation === 'subtract'){
    //    response.send(`the subtracted value is ${num1-num2}`)
    //} else if(operation === 'multiply'){
    //    response.send(`the multiply value is ${num1*num2}`)
    //}else if(operation === 'divide'){
    //    response.send(`the divide value is ${num1/num2}`)
    //}else if(operation === 'exponent'){
    //    response.send(`the exponent value is ${num1**num2}`)
    
    //}
    

//});

//    if(operation === 'add'){
//        response.send(`the sum is ${num1  + num2}`)
//    }
    




//entire code below
//require("dotenv").config();

//const express = require("express");
//const app = express();

//put in a route called calcquery takes in 2 parameters and a query for operation

//app.get("/calcquery/:numOne/:numTwo", (request, response) => {
    // console.log(
    //     request.params.numOne,
    //     request.params.numTwo,
    //     `the object type of ${request.params.numOne} which is on the URL is ${}`,
    // )
    //anything typed inside the URL will always be a string

    //const num1 = parseInt(request.params.numOne); //'2' ----> 2
    //const num2 = parseInt(request.params.numTwo); //'2' ----> 2
    //const operation = request.query.operation;

    //if (operation === "add") {
    //    response.send(`the sum is ${num1 + num2}`);
    //} else if (operation === "subtract") {
    //    response.send(`the subtracted value is ${num1 - num2}`);
    //} else if (operation === "multiply") {
    //    response.send(`the multiply value is ${num1 * num2}`);
    //} else if (operation === "divide") {
    //    response.send(`the divide value is ${num1 / num2}`);
    //} else if (operation === "exponent") {
    //    response.send(`the exponent value is ${num1 ** num2}`);
    //} else {
    //   response.send(`no operation`);
    //}
//});

//app.listen(process.env.PORT, () => {
//    console.log(`listening to port ${process.env.PORT}`);
//});