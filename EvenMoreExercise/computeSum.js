/*Write three functions that compute the sum of the numbers in a list: using a
for-loop, a while-loop and recursion. (Subject to availability of these constructs in
your language of choice.)*/

var list = [2,3,4,6]
//reduce method
// Getting sum of numbers.

var sum = list. reduce(function(a, b){
return a + b;
}, 0);
console. log("reduce method: "+sum); 

//for loop
function sumList(){
var Total1=0;
for(var i=0; i<list.length; i++){
      Total1= Total1 + list[i];
    }
 return Total1;   
}
console.log("The sum using for loop is "+ sumList());

//while loop
function addList(){
    var i=0;
    var Total2 = 0;
while(i < list.length){
    Total2 = Total2 + list[i];
    i++;
    }
    console.log( Total2);
    return Total2;
}
console.log("The sum using while loop is "+ addList());

// recursion Recursion is simply when a function calls itself.
function recurList(list){
  if (list.length<0) return; //Termination

  if (list.length ==1) return list[0];  // Base case

  return list[0]+recurList(list.slice(1,list.length));                 //Recursion
}
console.log("The sum using recursion: "+ recurList(list));


