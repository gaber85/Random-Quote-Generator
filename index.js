//the following function will populate the quote once the button is pressed
var lastNum=0;

function genNewNum(maxNum){
  var ramNum = Math.floor(Math.random() * maxNum);
  return ramNum;
}

/**
function genRamNum(jsonObj){
 var newNum=0;
  while (lastNum == newNum){
    newNum = genNewNum(jsonObj.allquotes.length);
    return newNum;
}

function displayNewQuote(jsonObj){
var newNum = genRamNum(jsonObj);
document.getElementById('quoteLine').innerHTML="\""+jsonObj.allquotes[newNum].quote + "\"";
document.getElementById('auth').innerHTML='–'+jsonObj.allquotes[newNum].author;
lastNum = newNum

}
**/

function showNewQuote(jsonObj) {
 var newNum=0;
  while (lastNum == newNum){
    newNum = genNewNum(jsonObj.allquotes.length);
}
  
  document.getElementById('quoteLine').innerHTML="\""+jsonObj.allquotes[newNum].quote + "\"";
  document.getElementById('auth').innerHTML='–'+jsonObj.allquotes[newNum].author;
  lastNum = newNum;
}


document.addEventListener('DOMContentLoaded', function(){
  
  document.getElementById('nqButton').onclick=function(){
    
req = new XMLHttpRequest();
req.open("GET",'./quotes.json',true);
req.responseType = 'json';
req.send();
req.onload=function(){
var quotes = req.response;
showNewQuote(quotes);
  
  
//blotting this code for now//document.getElementById('quoteLine').innerHTML=quotes['allquotes'][0]['quote'];

};//closes the onload

    
  };//closes the onclick
 
   
});//closes the DOMContentLoaded


