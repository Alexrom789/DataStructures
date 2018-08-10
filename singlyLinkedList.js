// Singly Linked List 
// Time Complexity
// Access: O(n)	Search: O(n)	Insertion:O(1)	Deletion: O(1)
// Space Complexity: O(n)

/////////////////////////Using Class Keyword///////////////////////////////////////

class Node {
  constructor (value = null){
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(){
    this.head =null;
  }

  addToHead(value){
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    return newNode; 
  }

  contains(value){
    let currentNode = this.head;
    while(currentNode !== null){
      if (currentNode.value === value){
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}


//////////////////////////Without Class Keyword///////////////////////////////////

// function Node (value){
// this.value = value;
// this.next = null;
// }

// function SLinkedList (){
//     this.head = null;
// }

// SLinkedList.prototype.addToHead = function (value){
//     let newNode = new Node(value);
//     newNode.next = this.head;
//     this.head = newNode;
//     return newNode;  
// }

let myLL = new SinglyLinkedList;
console.log(myLL);
myLL.addToHead(2);
console.log(myLL);
myLL.addToHead(3);
console.log(myLL);
console.log(myLL.contains(2));
console.log(myLL.contains(4));

