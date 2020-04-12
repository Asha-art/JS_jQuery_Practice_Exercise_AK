/*Write a function that merges two sorted lists into a new sorted list. [1,4,6],[2,3,5]
→ [1,2,3,4,5,6]. You can do this quicker than concatenating them followed by a
sort.
*/
var list1 =[1,4,6]
var list2 =[2,3,5]

function concatSort(){
   var newList = list1.concat(list2);
    return newList.sort();
}
console.log(concatSort());