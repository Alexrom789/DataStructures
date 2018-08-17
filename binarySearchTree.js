class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right =null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(data){
    let newNode = new Node(data);
    if (this.root === null){
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(node, newNode){
    if (newNode.data < node.data){
      if (node.left === null){
        node.left = newNode;
      } else{
        this.insertNode(node.left, newNode);
      }
    } else{
      if (node.right === null){
        node.right = newNode;
      } else{
        this.insertNode(node.right, newNode);
      }
    }
  }

   findMin(){
     let current = this.root;
     while (current.left !== null){
       current = current.left;
     }
     return current.data;
   }

   findMax(){
    let current = this.root;
    while (current.right !== null){
      current = current.right;
    }
    return current.data;
  }
  getRootNode()
  {
    return this.root;
  }
  
  //Transversals
  inorderDFS(node)
  {
    if(node !== null)
    {
        this.inorderDFS(node.left);
        console.log(node.data);
        this.inorderDFS(node.right);
    }
  }

  preorderDFS(node)
  {
    if(node != null)
    {
        console.log(node.data);
        this.preorderDFS(node.left);
        this.preorderDFS(node.right);
    }
  }

  postorderDFS(node)
  {
    if(node != null)
    {
        this.postorderDFS(node.left);
        this.postorderDFS(node.right);
        console.log(node.data);
    }
  }

  breadthFirstSearch(){}
}

const myBST = new BinarySearchTree();
console.log(myBST);
myBST.insert(4);
console.log(myBST);
myBST.insert(3);
myBST.insert(5);
myBST.insert(2);
myBST.insert(6);
// console.log('Min: ', myBST.findMin());
// console.log('Max: ', myBST.findMax());
let root = myBST.getRootNode();
console.log('Inorder DFS')
myBST.inorderDFS(root);
console.log('Preorder DFS')
myBST.preorderDFS(root);
console.log('Postorder DFS')
myBST.postorderDFS(root);