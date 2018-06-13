/***
	
Given a collection of integers that might contain duplicates, S, return all possible subsets.

Note:

Elements in a subset must be in non-descending order.
The solution set must not contain duplicate subsets.
The subsets must be sorted lexicographically.


With number theory: there are 2^n possible subsets out oa set of numbers


***/


function getCombinations(array){
	

	function fork(i,t){

			if(i===array.length){
				result.push(t);
				return;
			}
			fork(i+1, t.concat([array[i]]));
	};


	let result=[];
	fork(0,[]);
	return result;
};

let data=[1,2,2];

console.log(getCombinations(data));