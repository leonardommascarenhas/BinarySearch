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
}

const sortedArrayToBST = (arr, start, end) => {
  if (start > end) {
    return null;
  }
  let mid = parseInt((start + end) / 2);
  let node = new Node(arr[mid]);
  node.left = sortedArrayToBST(arr, start, mid - 1);
  node.right = sortedArrayToBST(arr, mid + 1, end);
  return node;
};

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const sortedArray = [...new Set(array.sort((a, b) => a - b))];

let n = sortedArray.length;
root = sortedArrayToBST(sortedArray, 0, n - 1);

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};
console.log(sortedArray);
prettyPrint(root);
