class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.value) return undefined;
      if (val < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  find(value){
      if(this.root === null) return false;
      let current = this.root, found = false;
      while(current && !found){
          if(value < current.value){
              current = current.left;
          } else if(value > current.value){
              current = current.right;
          } else {
              found = true;
          }
      }
      return current;
  }
  BFS(){
      let data = [];
      let queue = [];
      let node = this.root;
      queue.push(this.root);
      while(queue.length){
        node = queue.shift();
        data.push(node.value);
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
      }
      return data
  }
  DFSPreOrder(){
      /*
      TODO: Create a variable to store the values of nodes visited
      TODO: Store the root of the BST in a variable called current
      TODO: Write a helper function
          * Push the value of the node to the variable that stores the values
          * If the nodes has a left property, call the helper function with
            the left property on the node.
          * If the node has a right property, call the helper function with
            with the right property on the node    
        TODO: Invoke the helper function with the current variable
        TODO: Return the array of values
        */
      let data = []
      function traverse(node){
        data.push(node.value)
        if(node.left)traverse(node.left);
        if(node.right)traverse(node.right);
      }
      traverse(this.root)
      return data;
  }
}

let tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(9);
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);



console.log(tree.DFSPreOrder());

module.exports = Node;
module.exports = BinarySearchTree;
