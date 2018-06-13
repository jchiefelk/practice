/****

Given an unsorted integer array, find the first missing positive integer.

Example:

Given [1,2,0] return 3,

[3,4,-1,1] return 2,

[-8, -7, -6] returns 1

****/



function findMissingInteger(input){


	let positivearray=[]; // array of positive integers
	for(let x=0;x<input.length;x++){
		if(input[x]>=0) {
			positivearray[input[x]]=-1;
		} else{
			positivearray[input[x]]
		}
	};

	for(let x=1;x<=positivearray.length;x++){
		if(!positivearray[x]) return x;

	};




};


let input = [1,2,4];

console.log(findMissingInteger(input));