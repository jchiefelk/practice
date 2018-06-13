function quickSort(arr){
	if(arr.length<=1)
		return arr;

		let left = [];
		let right = [];
		let newArray =[];
		let pivot = arr.pop();
		let length = arr.length;

		for(let x=0;x<length;x++){
			if(arr[x]<=pivot){
				left.push(arr[x]);
			} else{ 
				right.push(arr[x]);
			}
		};

		return newArray.concat(quickSort(left),pivot,quickSort(right));
}

let myArray = [10,3,4,5,111,1,500,18,57,12,32];
console.log(quickSort(myArray));


