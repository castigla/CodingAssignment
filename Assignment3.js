/*
Ashley Castiglione

Assignment 3

pseudocode

numbers =  []
letters = given letters

while not 7 chars
	index = input mod 37 (gets original index if testing with leepdag)
	input = (index - input)/37 (basically reverse h = (h * 37) + index)
	return numbers

sources used:
http://stackoverflow.com/questions/3145030/convert-integer-into-its-character-equivalent-in-javascript
https://www.w3schools.com/jsref/jsref_unshift.asp - to get the answer in the correct format
*/

function assignment3(str) {
	var h = 7;

	var letters = ["a","c","d","e","g","i","l","m","n","o","p",
	"r","s","t","u","w"];

	for (var i = 0; i < str.length; i++) {
		var letter = str[i];
		var index = letters.indexOf(letter);
		h = (h * 37) + index;
		}
	return h;
}

function assignment3Answer(input) {
    var numbers = [];
    var letters = ["a","c","d","e","g","i","l","m","n","o","p",
	"r","s","t","u","w"];

	//loop until you get 7 chars
    while (input !== 7) {

    	//modolo input to get the index from the assignment3 function
        var index = input % 37;

        //reversal of h = (h * 37) + index
        input = (input - index) / 37;

        //unshift puts it all on one line
        numbers.unshift(letters[index]);
    }
    return numbers;
}
console.log("Assignment3 Answer:");
console.log(assignment3Answer(667734139064));
