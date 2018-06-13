/***
Given an array ‘A’ of sorted integers and another non negative integer k, find if there exists 2 indices i and j such that A[i] - A[j] = k, i != j.

Can I only go forward, or revers

***/
let A = [4,16,3,5,10,30,20,25,12,2];
let k=5; 

function findDifference(arr,index){
	
	let indicies=[];
	for(let x=0;x<arr.length;x++){
		for(let y=0;y<arr.length;y++){

			if(arr[x]-arr[y]==index && x!=y){
					indicies.push(x);
					indicies.push(y);
					console.log(x,y);
			}
		};
	};

	for(let x=arr.length-1;x>=0;x--){

		for(let y=arr.length-1;x>=0;x--){

			if(x!=y && arr[x]-arr[y]==index){
				indicies.push(x);
				indicies.push(x);
			}
		};
	};

	return indicies;
};

console.log(findDifference(A,k));