let practice = [12,4,6,10,20,2,9,17];

for(let x=0;x<practice.length;x++){

	for(let y=x;y<practice.length;y++){
		if(practice[x]>=practice[y]){
			[practice[y], practice[x]]=[practice[x], practice[y]];
		}
	};	
};

console.log(practice);