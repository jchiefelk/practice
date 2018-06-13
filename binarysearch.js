let array = [1,4,5,8,10,20,25,30,40,43,45];


function BinarySearch(arr,target){

	
	console.log(arr);

	let mid = parseInt(arr.length/2);
	let left = arr.slice(0,mid);

	let right = arr.slice(mid);

	console.log(target,arr[mid]);
	if(target==arr[mid]) {
		return true;
	} else if(target>right[mid]){
		BinarySearch(right,target)
	} else if(target<arr[mid]){
		BinarySearch(left,target)
	}


};

console.log(BinarySearch(array,40));