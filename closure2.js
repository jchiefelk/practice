function celebrityName(firstName){
	
	var nameIntro = "This celebrity is ";
	// this inner function has access to the outer functions variables, including the parameter;
	function lastName(theLastName){

		return nameIntro + firstName + " "+theLastName;
	}



	return lastName;

};
//
// The closure (lastName) is called here after the outer function has returned above
//
var mjName = celebrityName("Michael");
console.log(mjName);
console.log(mjName("Jackson"));