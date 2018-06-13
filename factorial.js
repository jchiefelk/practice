function Factorial(number){
	let factorial=number;
	let product=null;
	for(let x=number-1;x>1;x--){
		factorial*=x;
	};
	console.log(factorial);
};

Factorial(4);