/*
Remove duplicates from a Sorted Array
Given a sorted array, remove the duplicates in place such that each element appears only once and return the new length.
*/
let array = [1,5,6,10,13,13,20,20,21];


function DuplicateRemove(arr){

	let new_array=[];
	for(let x=0;x<arr.length;x++){
		//
		//
		for(let y = x; y<arr.length;y++){
			if(arr[x]==arr[y+1] ) {;
				new_array.push(y);
				//new_array.splice(y);
				//console.log(array);
			}
		};
		//
	};
	//
	// Multisplicing
	// new_array contains the indices to remove
	for(var i = 0; i < new_array.length; i++){
        var index = new_array[i] - i;
        console.log(index);
        arr.splice(index, 1);
    };    
	// console.log(arr);
};



DuplicateRemove(array);