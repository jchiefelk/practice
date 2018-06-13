let practice = [12,4,6,10,20,2,9,17];

function mergeSort(arr){
	let len = arr.length;
	if(len<2) 
		return arr;
	
	/**
	let mid = Math.floor(len/2); // returns the largest integer number greater than or equal to given number
	let left = arr.slice(0,mid);
	let right = arr.slice(mid,arr.length); // with slice you specify a begining, end is optional, returns end by default
	**/

	var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);

	return merge(mergeSort(left), mergeSort(right));
};


function merge(left,right){
	let result =[];

	while(left.length && right.length){
		if(left[0]<=right[0]){
			result.push(left.shift())
		} else {
			result.push(right.shift())
		}
	}

	while(left.length){
		result.push(left.shift());
	}
	
	while(right.length){
		result.push(right.shift());
	}
	

	return result;
};


console.log(mergeSort(practice) );
