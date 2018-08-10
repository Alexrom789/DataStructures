class Stack {
  constructor(){
  this.collection ={};
  this.size = 0;
  }

  push(value){
    this.collection[this.size] = value;
    this.size += 1;
	}
	
  pop(){
    let returnVal = this.collection[this.size - 1];
    this.size -= 1;
    return returnVal;
  }
}
//////////////////////////Without Class Keyword///////////////////////////////////

// function Stack(){
//     this.collection = {};
//     this.size = 0;
// }

// Stack.prototype.push = function (value){
//     this.collection[this.size] = value;
//     this.size += 1;
// }

// Stack.prototype.pop = function (){
//     let returnVal = this.collection[this.size -1];
//     this.size -= 1;
//     return returnVal;
// }

myStack = new Stack();
console.log("-----------------------------------------------------------------");
console.log("Initial Stack: ", myStack);
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log("Stack after pushing values: ", myStack);
console.log('Popped: ', myStack.pop());
console.log("Stack after popping: ",myStack);
console.log("-----------------------------------------------------------------");