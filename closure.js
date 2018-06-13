function showName(firstName,lastName){
	
	var nameIntro="Your name is ";
	// this inner function has access to outer function's variables, inluding the parameters
	function makeFullName(){

		return nameIntro+firstName+" "+lastName;
	};




	return makeFullName();


};

console.log(showName("Michael","Jackson"));