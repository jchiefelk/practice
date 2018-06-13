/***
Given an array A of integers, find the maximum of j - i subjected to the constraint of A[i] <= A[j].

If there is no solution possible, return -1.

Example :

A : [3 5 4 2]

Output : 2 
for the pair (3, 4)
***/


function maxDistanceBrute(arr){
	// Brute Force Method

	let distances=[];
	for(let x=0;x<arr.length;x++){

		for(let y=0;y<arr.length;y++){
			if(x!=y && arr[x]<=arr[y]) distances.push(y-x);
		};
	};
	console.log(Math.max(...distances));
};

function maxDistance(arr){

	let min_element=arr[0];
	let diff = arr[1]-arr[0];

	for(let x=1;x<arr.length;x++){

		if(arr[x]-min_element>diff){
			diff = arr[x]-min_element;
		}
		if(arr[x]<min_element){
			min_element=arr[x];
		}

	};


	console.log(diff);

};

let A = [3,5,4,2];
maxDistance(A);
maxDistanceBrute(A);