function Palindrome(word){
	let letters = word.split("");
	let reverse = letters.reverse();
	let pali='';
	for(let x = 0;x<reverse.length;x++){
		pali+=reverse[x];
	};
	if(word==pali){
		console.log("Word: "+word+" is a palindrome");
	} else {
		console.log("Word: "+word+" is NOT a palindrome")
	}
};

Palindrome("madam");