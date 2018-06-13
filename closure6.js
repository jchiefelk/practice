function celebrityIDCreator(theCelebrities){
	var i;
	var uniqueID=100;
	for(i=0;i<theCelebrities.length;i++){
		theCelebrities[i]["id"]=function(j){

			return function(){ // the j parametric value is the i passed in on invocation

				return uniqueID+j; //each iteration of the for loop passes the current value of i into thi
			}()
		}(i);	// immediately invoke the function passing the i variable as a parameter
	};

	return theCelebrities;
};


var actionCelebs = [{name: "Stallone",id: 0},{name: "Cruise",id: 0}, {name:"Willis", id: 0}];
var createdForActionCelebs = celebrityIDCreator(actionCelebs);
var stalloneID = createdForActionCelebs[0];
console.log(stalloneID.id); //100

let cruiseID = createdForActionCelebs[1];
console.log(cruiseID.id);