let totalSum = 0;
let userInput = 0;

// Create a loop to create the 0-9 key
const numberButtonArray = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '/', '*', '='];
for (let i = 0; i != numberButtonArray.length; i++) {
	document.querySelector(`#calculator`).innerHTML += `
    <button id="calc-num-${numberButtonArray[i]}">${numberButtonArray[i]}</button>`;
}

// Creating minus key seperate since it was breaking a loop
function minusKey() {
	document.querySelector(`#calculator`).innerHTML += `<button id="minus-key">-</button>`;
}
minusKey();

// Creating one function for key inputs
function keyPress(inputKey) {
	document.querySelector(`#calc-output`).value += inputKey;
}

// Creating a function to do the math PEMDAS
function doMath() {
	totalSum = eval(userInput);
}

// Creating a function to print the math
function printMath() {
	document.querySelector(`#calc-output`).value = totalSum;
}

// Creating a function for the clear button
function clearButton() {
	document.querySelector(`#calc-output`).value = ``;
}

// Adding event listener for the clear key
document.querySelector(`#calc-num-clear`).addEventListener('click', clearButton);

// Creating the listener
document.querySelector(`#calculator`).addEventListener('click', (buttonPress) => {
	for (i = 0; i != numberButtonArray.length; i++) {
		if (event.target.id.includes('=')) {
			userInput = document.querySelector(`#calc-output`).value;
			doMath();
			printMath();
		} else if (event.target.id.includes(numberButtonArray[i])) {
			keyPress(numberButtonArray[i]);
		} else if (event.target.id.includes('minus')) {
			keyPress('-');
			break;
		}
	}
});

// numberButtonArray[i]
// keyPress(numberButtonArray[i])

// If even === "=" then do math if not do rest

// To Do:
// Make error handling if user hits expression key and no exponents, etc
// CSS

// Questions to ask:
// How does ints become strings??
// Auto clear the screen

// Old original code before rework using loops and one function for the input

// Creating a function for the one key
// function numOneKey() {
// 	document.querySelector(`#calc-output`).value += 1;
// }

// // Creating a function for the two key
// function numTwoKey() {
// 	document.querySelector(`#calc-output`).value += 2;
// }

// // Creating a function for the three key
// function numThreeKey() {
// 	document.querySelector(`#calc-output`).value += 3;
// }

// // Creating a function for the four key
// function numFourKey() {
// 	document.querySelector(`#calc-output`).value += 4;
// }

// // Creating a function for the five key
// function numFiveKey() {
// 	document.querySelector(`#calc-output`).value += 5;
// }

// // Creating a function for the six key
// function numSixKey() {
// 	document.querySelector(`#calc-output`).value += 6;
// }

// // Creating a function for the seven key
// function numSevenKey() {
// 	document.querySelector(`#calc-output`).value += 7;
// }

// // Creating a function for the eight key
// function numEightKey() {
// 	document.querySelector(`#calc-output`).value += 8;
// }

// // Creating a function for the nine key
// function numNineKey() {
// 	document.querySelector(`#calc-output`).value += 9;
// }

// // Creating a function for the zero key
// function numZeroKey() {
// 	document.querySelector(`#calc-output`).value += 0;
// }
// // Creating a function for the addition key
// function additionKey() {
// 	document.querySelector(`#calc-output`).value += `+`;
// }

// // Creating a function for the multiply key
// function multiplyKey() {
// 	document.querySelector(`#calc-output`).value += `*`;
// }

// // Creating a function for the divide key
// function divideKey() {
// 	document.querySelector(`#calc-output`).value += `/`;
// }

//
//
//
// Adding event listener for the number one key
// document.querySelector(`#calc-num-one`).addEventListener('click', numOneKey);

// // Adding event listener for the number two key
// document.querySelector(`#calc-num-two`).addEventListener('click', numTwoKey);

// // Add event listener for the three key
// document.querySelector(`#calc-num-three`).addEventListener('click', numThreeKey);

// // Add event listener for the four key
// document.querySelector(`#calc-num-four`).addEventListener('click', numFourKey);

// // Add event listener for the five key
// document.querySelector(`#calc-num-five`).addEventListener('click', numFiveKey);

// // Add event listener for the six key
// document.querySelector(`#calc-num-six`).addEventListener('click', numSixKey);

// // Add event listener for the seven key
// document.querySelector(`#calc-num-seven`).addEventListener('click', numSevenKey);

// // Add event listener for the eight key
// document.querySelector(`#calc-num-eight`).addEventListener('click', numEightKey);

// // Add event listener for the nine key
// document.querySelector(`#calc-num-nine`).addEventListener('click', numNineKey);

// // Add event listener for the zero key
// document.querySelector(`#calc-num-zero`).addEventListener('click', numZeroKey);

//
//
//
// Adding event listener for the plus key
// document.querySelector(`#calc-num-plus`).addEventListener('click', additionKey);

// // Adding event listener for the multiply key
// document.querySelector(`#calc-num-multiply`).addEventListener('click', multiplyKey);

// // Adding event listener for the divide key
// document.querySelector(`#calc-num-divide`).addEventListener('click', divideKey);
