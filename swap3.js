let practice = [1,2,3,4];

function jSwap(arr,fwap,swap){
	let firstswap=arr[fwap]; // element of first swap
	arr[fwap]=arr[swap];
	arr[swap]=firstswap;
	console.log(arr);
}


jSwap(practice,0,3); // function takes array, first swap index, second swap index