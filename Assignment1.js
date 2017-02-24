/*
Ashley Castiglione

Assignment1

solution1
brute force

pseudocode

int array [1, 5, 6, 12, 78, 3, 2, 4]
int num1, num2, diff, temp

outer loop: for(int i = 0; i < array.length; i++)
	inner loop: (int j = i + 1; j < array.length; j++)
		num1 = array[i]
		num2 = array[j]
		if num1 = num2 
			print error: numbers should not be the same
		int temp = num1 - num2
		if temp > diff
			diff = temp
		print diff


tests:
created array = [1, 5, 6, 12, 78, 3, 1, 4];
	should hit error as 1 occurs twice - true
changed to have all separate numbers array = [1, 5, 6, 12, 78, 3, 1, 4];	

sources used:
https://www.w3schools.com/js/js_syntax.asp - mainly for syntax

*/

var array = [1, 5, 6, 12, 78, 3, 2, 4];
var num1, num2;
var diff = 0;
var temp = 0;

//outer loop
for (var i = 0; i < array.length; i++) {
	//inner loop
	for (var j = i + 1; j < array.length; j++) {
		//set vars to array locations
		num1 = array[i];
		num2 = array[j];

		//if numbers are the same print error
		if (num1 == num2) {
			console.log("Error: numbers must be different");
		};

		//subtract 1 from 2
		temp = num1 - num2;

		//if negative number, multiply by -1
		if (temp < 0) {
			temp = temp * -1;
		};
		//if temp number is larger than difference, temp becomes new diff
		if (temp > diff) {
			diff = temp;
		};
		
	};
};

//print solution
console.log("Assignment1 Answer 1:");
console.log(diff);


/*
Assignment1

Solution 2
min and max

pseudocode

for (var k = 0; k < array.length; k++) 
	currentNumber = array[k];
	
	if (currentNumber < min) 
		min = currentNumber;
	
	if (currentNumber > max) 
		max = currentNumber;
	
difference = max - min;

print difference
*/

//using the same array from above for testing
var min = array[0];
var max = array[0];
var currentNumber;
var difference;

for (var k = 0; k < array.length; k++) {
	currentNumber = array[k];
	
	if (currentNumber < min) {
		min = currentNumber;
	};
	if (currentNumber > max) {
		max = currentNumber;
	};
};
difference = max - min;
//print solution
console.log("Assignment1 Answer 2:");
console.log(difference);

/*

I'd say solution two is better because there is only one loop used.
This allows for faster run time O(n) compared to a nested for loop run time O(n^2).

*/