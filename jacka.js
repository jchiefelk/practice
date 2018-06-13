let housemoney=[10,1,1,3,1,10,1,5];
function Jacka(nums){
	let length = nums.length;
	if(length==0){
		return 0;
	} else if (length==1){
		return nums[0];
	}
	let opt=[];
	opt[0]=nums[0];
	opt[1]=Math.max(nums[0],nums[1]);
	//
	for(let x = 2; x<length;x++){
		opt[x]=Math.max(nums[x]+opt[x-2],opt[x-1]);
		// console.log(x,opt[x]);
	};
	// console.log(opt);

	return opt[length-1];
};

console.log(Jacka(housemoney));