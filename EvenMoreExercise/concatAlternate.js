//Write a function that combines two lists by alternatingly taking elements, e.g.
//[a,b,c], [1,2,3] → [a,1,b,2,c,3].(zipping type)

var list1 = ['a','b','c']
var list2 = [1,2,3]

var i=0;

function concatAlternate(){
   var newList =[];
    for( i=0; i<list1.length; i++){
        newList.push(list1[i]);
        newList.push(list2[i]);    
        }
    
    return newList;
}
console.log("combine Alternatingly: "+concatAlternate());
