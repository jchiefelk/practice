/***
Given a collection of numbers, return all possible permutations.

Example:

[1,2,3] will have the following permutations:

[1,2,3]
[1,3,2]
[2,1,3] 
[2,3,1] 
[3,1,2] 
[3,2,1]



Note: There are N! permutations from an array of length of N

***/

function findPermutations(input){


	let permutations = [];
	let permutationnumber = 1;
	for(let x=input.length;x>=1;x--){
		permutationnumber*=x
	};


	let permute = function(input,index){
			let combo=[];

			for(let x=0;x<input.length;x++){
				combo.push(input[x])
			};

			console.log(combo);
			permutations.push(combo);
			for(let x=0;x<input.length){
				[input[x]]
			}

	};



	permute(input,0);

};


let input = [1,2,3];
console.log(findPermutations(input));