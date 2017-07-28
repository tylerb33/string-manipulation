console.log ("strings.js");

let palindromeOutput = document.getElementById("palindrome-output");
let alphaOutput = document.getElementById("alpha-output");
let reverseOutput = document.getElementById("reversed-output");
let userInput = document.getElementById("input");
let button = document.getElementById("submitButton");
let reversedWord;

function reversal(userString) {
	reversedWord = userString.split("").reverse().join("");
	reverseOutput.innerHTML = `<p>${reversedWord}</p>`;
	// console.log ("reversedWord", reversedWord);
}

function alphabits(userString) {
	let alphabetized = userString.split("").sort().join("");
	alphaOutput.innerHTML = `<p>${alphabetized}</p>`;
	// console.log ("alphabetized", alphabetized);
}

function palindrome(userString) {
	if (reversedWord === userString) {
		palindromeOutput.innerHTML = `<p>Your word is a palindrome!</p>`;
	}else {
		palindromeOutput.innerHTML = `<p>Damn, your word is not a palindrome. Try another!</p>`;
	};
}

function checkLetters()  {
      var letters = /^[A-Za-z]+$/;  
      if(userInput.value.match(letters)) {   
      getInput();
      return true;  
      }else {  
      alert('Please input alphabet characters only');  
      return false;  
      }  
}


function getInput() {
	let userString = userInput.value;
	reversal(userString);
	alphabits(userString);
	palindrome(userString);
	
}


button.addEventListener("click", checkLetters);
userInput.addEventListener("keyup", function(event) {
	console.log ("event", event);
	if (event.which === 13) {
	checkLetters();
	};
});

