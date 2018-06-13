
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

function findCombinations(n,k){
	
	let combos = []

	for(let x=1;x<=n;x++){
		let arr = [k,x];
		if(k>x){

			[arr[1],arr[0] ]= [	arr[0],arr[1] ]; // bubble sort'ish

		}
		// console.log(arr);
		combos.push(arr);
	};

	return combos;
};

let n = 4;
let k = 2;

console.log(findCombinations(n,k));