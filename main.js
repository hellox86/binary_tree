// Бинарное дерево
"use strict";

class Node {
  data;
  left;
  right;
  constructor(d, l, r) {
    this.data = d;
    this.left = l;
    this.right = r;
  }
}
let root;

function init_tree(data) {
  root = new Node(data, null, null);
}

function add_el_to_tree(r, data) {
  if (data > r.data) {
    if (r.right == null) {
      r.right = new Node(data, null, null);
      return 1;
    } else {
      return add_el_to_tree(r.right, data);
    }
  } else {
    if (r.left == null) {
      r.left = new Node(data, null, null);
      return 1;
    } else {
      return add_el_to_tree(r.left, data);
    }
  }
}
function remove_el_from_tree(r, data) {}
init_tree(0);
for (let i = 1; i < 20; i++) {
  add_el_to_tree(root, i * 2);
}
function get_count(r, c = 0) {
  if (r != null) {
    if (r.left != null) {
      return get_count(r.left, c + 1);
    } else {
      return get_count(r.right, c + 1);
    }
  } else {
    return c;
  }
}

function print(r) {
  if (r != null) {
    console.log(r.data);
    if (r.left != null) {
      return print(r.left);
    } else {
      return print(r.right);
    }
  }
}

function show_tree(r) {
  console.log(root.data);
  const cur = r;
  r = r.left;
  print(r);
  r = cur.right;
  print(r);
}
console.log(root);
// show_tree(root);

console.log(get_count(root));
