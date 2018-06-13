
function BinaryTree(){
	this.root=null
};

function Node(value){
	this.value=value;
	this.left=null;
	this.right=null;
};

BinaryTree.prototype.add = function(value){

	if(this.root==null){
		this.root = new Node(value);
	} else {
		this.insert(this.root,value);
	}
};

BinaryTree.prototype.insert = function(obj,value){

	if(obj.value<value && obj.right!=null){
		this.insert(obj.right,value);
	}

	if(obj.value>value && obj.left!=null){
		this.insert(obj.left,value);
	}

	if(obj.value>value && obj.left==null){
		obj.left = new Node(value);
	}

	if(obj.value<value && obj.right==null){
		obj.right = new Node(value);
	}

};


BinaryTree.prototype.lookup = function(obj,value){
	
	if(value>obj.value){
		this.lookup(obj.right,value);
	}

	if(value<obj.value){
		this.lookup(obj.left,value);
	}

	if(value==obj.value){
		console.log('found value');
		console.log(obj);
		return obj
	}
};

//
// Breadth-First Search
//
BinaryTree.prototype.bFSLTR = function(){

	let node = this.root;

	let result =[];
	let enqueue = [node];

	while(enqueue.length>0){
		let node = enqueue.shift();
		result.push(node.value);

		if(node.left){
			enqueue.push(node.left);
		}

		if(node.right){
			enqueue.push(node.right);
		}

	}

	return result;

};



BinaryTree.prototype.bFSRTL = function(){


	let node = this.root;
	let enqueue = [this.root]; 
	let result=[];
	while(enqueue.length>0){
		let node = enqueue.shift();
		result.push(node.value);

		if(node.right){

			enqueue.push(node.right);
		}

		if(node.left){
			enqueue.push(node.left);
		}

	}

	return result;

};


// Types of Binary Search to Know
//
/**
1) inOrder
2) preOrder
3) postOrder
**/


let bt = new BinaryTree();
bt.add(5);
bt.add(6);
bt.add(7);
bt.add(1);
bt.add(23);
console.log(bt.bFSLTR());
console.log(bt.bFSRTL());
