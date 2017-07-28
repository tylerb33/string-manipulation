console.log ("strings.js");

let palindromeOutput = document.getElementById("palindrome-output");
let alphaOutput = document.getElementById("alpha-output");
let reverseOutput = document.getElementById("reversed-output");
let userInput = document.getElementById("input");
let button = document.getElementById("submitButton");
let reversedWord;

function reversal(testString) {
	reversedWord = testString.split("").reverse().join("");
	reverseOutput.innerHTML = `<p>${reversedWord}</p>`;
	// console.log ("reversedWord", reversedWord);
}

function alphabits(testString) {
	let alphabetized = testString.split("").sort().join("");
	alphaOutput.innerHTML = `<p>${alphabetized}</p>`;
	// console.log ("alphabetized", alphabetized);
}

function palindrome(testString) {
	if (reversedWord === testString) {
		palindromeOutput.innerHTML = `<p>Your word is a palindrome!</p>`;
		// event.preventDefault();
	}else {
		palindromeOutput.innerHTML = `<p>Damn, your word is not a palindrome. Try another!</p>`;
		// event.preventDefault();
	};

}

var testString = "";

function getInput() {
	let testString = userInput.value;
	reversal(testString);
	alphabits(testString);
	palindrome(testString);
	

}


button.addEventListener("click", getInput);
userInput.addEventListener("keyup", function(event) {
	if (event.which === 13) {
	getInput();	
	};
});

