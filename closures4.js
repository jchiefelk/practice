/**
Closures store references to the outer function’s variables; they do not store the actual value.  Closures get more interesting when the value of the outer function’s variable changes before the closure is called. And this powerful feature can be harnessed in creative ways, such as this private variables example first demonstrated by Douglas Crockford: 
**/

function celebrityID(){
	var celebrityID=999;
	// We are returning an object with some inner functions

	return {

		getID: function(){

			// this inner function will return the UPDATED celebrityID varaiable
			// It will return the current value of celebrityID, even after the changeTheID function changes
			return celebrityID;
		},


		setID: function(theNewID){
			// This inner function will change the outer function's variable anytime
			celebrity = theNewID;
			return celebrity;
		}

	}	

};

var mjID = celebrityID();
console.log(mjID.getID()); // 999
console.log(mjID.setID(567)); // 567: It returns the updated celebrityId variable