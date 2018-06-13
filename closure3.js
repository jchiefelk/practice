function outerFunction(){
	


	function innerFunction(){
		return "Fuck Shit";
	};

	return innerFunction;

};

var closure = outerFunction();
console.log(closure);

console.log(closure())
