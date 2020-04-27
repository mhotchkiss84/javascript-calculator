// Declaring the variables for the user input and total
let totalSum = 0;
let userInput = 0;

// Create a loop to create the 0-9 key
const numberButtonArray = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '/', '*', '=' ];
for (let i = 0; i != numberButtonArray.length; i++) {
	document.querySelector(`#calculator`).innerHTML += `
    <button id="calc-num-${numberButtonArray[i]}">${numberButtonArray[i]}</button>`;
}

// Creating minus key seperate since it was breaking a loop
function minusKey() {
	document.querySelector(`#calculator`).innerHTML += `<button id="minus-key">-</button>`;
}

// Calling minusKey function
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
