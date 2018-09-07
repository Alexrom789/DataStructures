// Queue
// Time Complexity
// Access: O(n)	Search: O(n)	Insertion:O(1)	Deletion: O(1)
// Space Complexity: O(n)

/////////////////////////Using Class Keyword//////////////////////////////////////

class Queue{
  constructor(){
    this.collection = {};
    this.startIdx = 0;
    this.endIdx = 0;
  }

  enqueue(value){
    this.collection[this.startIdx] = value;
    this.startIdx += 1;
  }

  dequeue(){
    let returnVal = this.collection[this.endIdx];
    if (returnVal === undefined) return returnVal;
    delete this.collection[this.endIdx];
    this.endIdx -= this.endIdx;
    return returnVal;
  }
}

//////////////////////////Without Class Keyword///////////////////////////////////

// function Queue() {
//     this.collecton = {}
//     this.startIdx = 0;
//     this.endIdx = 0;
// }

// Queue.prototype.enqueue = function (value) {
//     this.collection[this.startIdx] = value;
//     this.startIdx += 1;
// }

// Queue.prototype.dequeue = function(){
//     let returnVal = this.collection[this.endIdx];
//     if (returnVal === undefined) return returnVal;
//     delete this.collecton[this.endIdx];
//     this.endIdx -= this.endIdx;
//     return returnVal;
// }

myQueue = new Queue();
console.log(myQueue);
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);