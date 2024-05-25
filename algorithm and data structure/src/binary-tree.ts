class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);
const node2 = new TreeNode(2, node4, node5);
const node3 = new TreeNode(3, null, node6);
const root = new TreeNode(1, node2, node3);

function printTree(node: TreeNode | null): void {
  if (node === null) {
    return;
  }
  console.log(node.val);
  printTree(node.left);
  printTree(node.right);
}

function inorderTraversal(root: TreeNode | null) {
  const result: number[] = [];

  function traverse(node: TreeNode | null) {
    if (node === null) {
      return;
    }

    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }

  traverse(root);
  return result;
}

function locate(root: TreeNode | null, value: number): boolean | undefined {
  if (root === null) {
    return;
  }

  if (root.val === value) {
    return true;
  }

  return locate(root.left, value) || locate(root.right, value);
}

function insert(root: TreeNode | null, value: number) {
  if (root === null) {
    return new TreeNode(value);
  }

  if (value < root.val) {
    root.left = insert(root.left, value);
  } else if (value > root.val) {
    root.right = insert(root.right, value);
  }

  return root;
}