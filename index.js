function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested").querySelector(".target")
}

function increaseRankBy(n){
  
  var rankedList = document.querySelectorAll('ul.ranked-list')
  
  for (let i =0; i < rankedList.length; i++){
    rankedList[i].innerHTML = (parseInt(rankedList[i].innerHTML) + n); 
  }
}


function deepestChild(){

 //My first way of completing this task without using the breadth-first search
 var grandNode = document.querySelector('#grand-node').querySelectorAll('div'); // this gets all the div's child nodes
 
  return grandNode[grandNode.length-1]; // i used this to return the deepest child after tinkering with the outputs in the console
  
//another way of creating this function
/* 
var node = document.queryselector('#grand-node');
var nextNode = node.children[0];

while(nextNode){ // this checks if there's a child of that node, this is another good way of iterating through something
  node = nextNode; // this gets the child of that current node  
  nextNode = node.children[0]; // this goes to the next node 
}
return node // this returns the deepest child from the grandNode ID element
*/
}


