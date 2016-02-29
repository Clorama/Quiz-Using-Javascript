var responseOne = false;
var responseTwo = false;
var responseThree = false;
var responseFour = false;
var responseFive = false;


var answerOne = prompt("what's your name?");
 if (answerOne === "clo") {
   document.write("great name");
   responseOne = true;
   
 }
   
var answerTwo = prompt("What's your location?");
  if (answerTwo == "London" ){
      document.write("great place");
    responseTwo = true;
      }
var answerThree = prompt("what's your favorite color?");
      if (answerThree === "blue" ){
          document.write("great color");
        responseThree = true;
  }
var answerFour = prompt("what number questions is this?");
  if (answerThree === "4" ){
          document.write("great memory");
    responseFour = true;
  }
var answerFive = prompt("are we done yet?");
  if (answerFive === "yes") {
    document.write("great!!!");
    responseFive = true;
  }

if (responseOne === true && responseTwo === true && responseThree === true && responseFour === true && responseFive === true) { 
  document.write("Congrats! You got all five right!");
}else {
  document.write("sorry, you got less than 5 right");
}
