/***

You are given a read only array of n integers from 1 to n.

Each integer appears exactly once except A which appears twice and B which is missing.

Return A and B.

Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Note that in your output A should precede B.

Example:

Input:[3 1 2 5 3] 

Output:[3, 4] 

A = 3, B = 4

***/

function findMissing(input){


	//console.log(input);

	let hash={};
	let results=[]; 
	let missingnum=null

	for(let x=1;x<=input.length;x++){
		


		if(!hash[input[x]]){
			hash[x]=1;
		} else {
			hash[input[x]]+=1;
		}

	};

	let duplicates=null;
	for(let key in hash){
		console.log(hash[key],key);
		if(hash[key]>=2) duplicates=key;
		results.push(key);
	};

	let response={

		A: duplicates,
		B: null
	};
	for(let x=1;x<=results.length;x++){
		if(!results[x]) {
			response.B=x;
			return response;
		}
	};


	
};


let input = [3,1,2,5,3];

console.log(findMissing(input));