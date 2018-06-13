
/*
	Given an integer n, return the number of trailing zeroes in n!.
*/


function trailingZeros(num){
	
	let factorial = num;
	for(let x=num-1;x>=1;x--){
		factorial*=x;
	};

	console.log(factorial);
	let number=factorial;
	let factorlist=[];
	let zeros=0;
	let factors = function(number){
		if(number%5==0){
			factorlist.push(number/5);
			zeros+=(number/5);
			if( (number/5)%5==0 ) factors(number/5);

		} else {
			// console.log(number);
			number=number-1;
			factors(number);
		}
	};
	factors(number);

	// number of trailing zeros is equal to the number of factors of 5.  This is a number theory problem
	return factorlist.length;

};

console.log(trailingZeros(15));
