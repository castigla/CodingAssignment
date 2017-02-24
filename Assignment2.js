/*
Ashley Castiglione

Assignment 2

pseudocode
check four points on 2 rectangles

rectangle1: upper left, lower right (l1, r1)
rectangle2: upper left, lower right (l2, r2)

if l1 is > r2 or l2 is > r1 
	then they do not overlap
if l1 < r2 or 12 is < r1 
	then they do not overlap
otherwise they overlap 


source used:
http://www.geeksforgeeks.org/find-two-rectangles-overlap/

I assumed the overlap of rectangle 1 and rectangle 4 will allow for a true
since they are sharing a pixel

*/
//rectangles given
var rect1 = {
x: 20, y:30, width: 40, height: 11
}

var rect2 = {
x: 50, y:22, width: 26, height: 36
}

var rect4 = {
x: 10, y:10, width: 30, height: 20
}

var rect5 = {
x: 45, y:10, width: 12, height: 4
}

function rectangles(recA, recB){

	//if rectangle is on the left return false
	if (recA.x > recB.width + recB.x || recB.x > recA.width + recA.x) {
		console.log("false");
		return false;
	}
	//if rectangle is above return false
	if (recA.y > recB.height + recB.y || recB.y > recA.height + recA.y) {
		console.log("false");
		return false;
	}
	else {
		console.log("true");
		return true;
	}
}
//call function and test with given rectangles
console.log("Assignment2 Answer:");
rectangles(rect1, rect2);
	