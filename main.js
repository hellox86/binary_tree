// Бинарное дерево

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
function add_el_to_tree(data) {}
