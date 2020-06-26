/* Вывести в консоль иерархическую структуру документа, так, как это показано на практической части.
Реализовать 3 функции, выполняющие это разными способами */

function showTreeOne() {
  let allNode = document.querySelectorAll('*');
  console.log(allNode);
}

showTreeOne();

var items = startElem.getElementsByTagName("*");
for (var i = items.length; i--;) {
  //do stuff
}




function showTreeOne() {
  function traverse(node, elems) {
    if (node) {
      console.log(node.nodeType, node.nodeName, node.nodeValue)
      var childs = node.childNodes;
      for (var i = 0; i < childs.length; i++) {
        traverse(childs[i], elems)
      }
    }
  }

  traverse(document.getElementsByTagName("html")[0])
}
showTreeOne();


function showTreeTwo() {
  function showTreeTwo(node, deep = 0) {
    console.log(node.nodeType, node.nodeName, node.nodeValue);

    for (let item = node.firstChild; item; item = item.nextSibling) {
      showTreeTwo(item, deep + 1);
    }
  }
  showTreeTwo(document.getElementsByTagName("html")[0]);
}
showTreeTwo();


function showTreeThree() {
  var currentNode,
    ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ALL);

  while (currentNode = ni.nextNode()) {
    console.log(currentNode.nodeType, currentNode.nodeName, currentNode.nodeValue);
  }
}
showTreeThree();