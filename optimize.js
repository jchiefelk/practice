/**
You are given 3 arrays A, B and C. All 3 of the arrays are sorted.

Find i, j, k such that :
max(abs(A[i] - B[j]), abs(B[j] - C[k]), abs(C[k] - A[i])) is minimized.
Return the minimum max(abs(A[i] - B[j]), abs(B[j] - C[k]), abs(C[k] - A[i]))
**/

let A = [1, 4, 10];
let B = [2, 15, 20];
let C = [10, 12,15];


// Assuming i,j,k are the indices for arrays A,B,C respectively
// max(abs(diff1,diff2,diff3))

let diff1,diff2,diff3;
let maxArray=[];

for(let i=0;i<A.length;i++){
	for(let j=0;j<B.length;j++){
		diff1=Math.abs(A[i]-A[j]);
		for(let k=0;k<C.length;k++){
			diff2=Math.abs(B[j]-C[k]);
			diff3=Math.abs(C[k]-A[i]);
			maxArray.push(Math.max(diff1,diff2,diff3));
		};
	};
};

console.log(Math.min(...maxArray));