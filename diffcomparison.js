/**
Difference Comparison Problem
	
Given an array ‘A’ of sorted integers and another non negative integer k, find if there exists 2 indices i and j such that A[i] - A[j] = k, i != j.
**/

let array = [1,3,5];
let k = 3;

function DifferenceCompare(arr, ref){
	for(let x=arr.length-1; x>=0;x--){
		// console.log(arr[x]);
		for(let y=x;y>=1;y--){
			if(arr[x]-arr[y-1]==ref) {
				console.log(ref);
				return "Yup" 
			}	
		};
	};

	return "Nope"
};

console.log(DifferenceCompare(array,k));