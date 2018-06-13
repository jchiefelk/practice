
/***
Given two integers n and k, return all possible combinations of k numbers out of 1 2 3 ... n.

Make sure the combinations are sorted.

To elaborate,
1. Within every entry, elements should be sorted. [1, 4] is a valid entry while [4, 1] is not.
2. Entries should be sorted within themselves.

Example :
If n = 4 and k = 2, a solution is:

[
  [1,2],
  [1,3],
  [1,4],
  [2,3],
  [2,4],
  [3,4],
]

****/


function findCombinationsRecursively(n,k){


	let combos =[];

	let find = function(index){

	
		let arr = [k,index];

		if(index>n){
			return combos;
		}


		if(k>index){
			[arr[0],arr[1]] = [arr[1],arr[0]];
		}

		if(index<=n){
			index+=1;
			combos.push(arr);
			find(index);
		}

	};


	find(0);

	return combos;

};

let k = 2;
let n = 4;

let combinations = findCombinationsRecursively(n,k);
console.log(combinations);