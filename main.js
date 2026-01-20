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
let root = null;

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

//
function min_in_tree(r) {
  if (r.left.left == null) return r;
  return min_in_tree(r.left);
}
// Помогло с функцией удаления: https://ru.stackoverflow.com/questions/660940/%D0%A3%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8%D0%B7-%D0%B1%D0%B8%D0%BD%D0%B0%D1%80%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%B0

function remove_el_from_tree(r, data, parent) {
  debugger;
  if (r != null) {
    if (data > r.data) {
      return remove_el_from_tree(r.right, data, r);
    } else if (data < r.data) {
      return remove_el_from_tree(r.left, data, r);
    } else {
      if (r.left == null && r.right == null) {
        if (parent != null) {
          if (parent.left === r) {
            parent.left = null;
          }
        }
        if (parent.right === r) {
          parent.right = null;
        }
        r = null;
      } else if (r.left == null || r.right == null) {
        let toRemove = null;
        if (r.left != null) {
          toRemove = r.left;
        }
        if (r.right != null) {
          toRemove = r.right;
        }
        r.data = toRemove.data;
        r.left = toRemove.left;
        r.right = toRemove.right;
      } else if (r.left != null && r.right != null) {
        if (r.right.left == null) {
          r.data = r.right.data;

          let rr = r.right.right;
          r.right = null;
          r.right = rr;
        } else {
          let res = min_in_tree(r.right);
          r.data = res.left.data;
          res.left = null;
        }
      }
    }
  }
}
// TEST
init_tree(14);
add_el_to_tree(root, 1);
add_el_to_tree(root, 653);
add_el_to_tree(root, 45);
add_el_to_tree(root, 0);
add_el_to_tree(root, 95);
add_el_to_tree(root, 11);
add_el_to_tree(root, 8);
add_el_to_tree(root, 13);
add_el_to_tree(root, 28);
add_el_to_tree(root, 4);
add_el_to_tree(root, 5);
add_el_to_tree(root, 111);
add_el_to_tree(root, 6775);
add_el_to_tree(root, 541);
add_el_to_tree(root, 96);
add_el_to_tree(root, 6);

// TEST 2
// init_tree(0);

// for (let i = 1; i <= 100; i++) {
//   add_el_to_tree(root, i);
// }

// function isLeaf(r) {
//   if (r == null) return true;
//   if (r.left == null && r.right == null) {
//     return true;
//   }
//   return false;
// }
// let flag = false;

// my strange version of print tree
// function iterate(r, parent) {
//   if (r != null) {
//     console.log(r.data);
//     if (r.left != null) {
//       if (r.right != null && !flag) {
//         console.log(r.right.data);
//       }
//       return iterate(r.left, r);
//     } else if (r.right != null) {
//       if (r.left != null && !flag) {
//         console.log(r.left.data);
//       }
//       return iterate(r.right, r);
//     } else {
//       if (parent.left === r && !isLeaf(parent.right)) {
//         flag = true;
//         return iterate(parent.right, parent);
//       } else if (parent.right === r && !isLeaf(parent.left)) {
//         flag = true;
//         return iterate(parent.left, parent);
//       }
//     }
//   }
// }

function show_tree(r) {
  console.log(root.data);
  const cur = r;
  if (r.left != null) {
    r = r.left;
    iterate(r, r);
  }

  if (cur.right != null) {
    r = cur.right;
    iterate(r, r);
  }
}

// default print tree

function show_tree(r) {
  let c = 0;

  function iterate(r) {
    if (r != null) {
      iterate(r.left);
      c++;
      console.log(r.data);
      iterate(r.right);
    }
  }
  iterate(root);

  return c;
}
console.log(root);

let c = show_tree(root);

console.log(" ");
console.log(c);
console.log(" ");
remove_el_from_tree(root, 1, root);
c = show_tree(root);
console.log(c);
// console.log(" ");

// show_tree(root);
