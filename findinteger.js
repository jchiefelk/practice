
/**
You’re given a read only array of n integers. Find out if any integer occurs more than n/3 times in the array in linear time and constant additional space.

If so, return the integer. If not, return -1.

If there are multiple solutions, return any one.

Example :

Input : [1 2 3 1 1]
Output : 1 
1 occurs 3 times which is more than 5/3 times. 
***/

function findInteger(input){
	

	let hash ={	};
	for(let x=0;x<input.length;x++){

		if(!hash[input[x]]){
			hash[input[x]]=1;
		} else {
			hash[input[x]]+=1;
		}
	};



	for(let key in hash){
		if(hash[key]>parseInt(input.length/3)){
			return key;	
		} 

	}




}


let input=[2,2,3,1,2];

console.log(findInteger(input));