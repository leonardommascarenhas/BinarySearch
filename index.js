class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  sortedArrayToBST = (arr, start, end) => {
    if (start > end) {
      return null;
    }
    let mid = parseInt((start + end) / 2);
    let node = new Node(arr[mid]);
    node.left = this.sortedArrayToBST(arr, start, mid - 1);
    node.right = this.sortedArrayToBST(arr, mid + 1, end);
    return node;
  };
  buildTree(arr) {
    const sortedArray = [...new Set(arr.sort((a, b) => a - b))];
    let n = sortedArray.length;
    this.root = this.sortedArrayToBST(sortedArray, 0, n - 1);
  }
  prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
}

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

let a = new Tree();
a.buildTree(array);
a.prettyPrint(a.root);
