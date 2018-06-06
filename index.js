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
  var grandNode = document.querySelector('#grand-node').querySelectorAll('div'); // this gets all the div's child nodes
  return grandNode[grandNode.length-1] // i used this to return the deepest child after tinkering with the outputs in the console
}
