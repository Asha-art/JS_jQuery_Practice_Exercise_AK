//12. Write a function that reverses a list, preferably in place.
// 13.Write a function that checks whether an element occurs in a list.
// 14.Write a function that returns the elements on odd positions in a list.
// 15.Write a function that computes the running total of a list.


var list = ['Apple','Pineapple','Noon','Level','Grapes','Watermelon','Kiwi']
function revList(){
    return list.reverse();
}
   // console.log(revList());

    // 13.Write a function that checks whether an element occurs in a list.
  function findElement(){
    //return list.indexOf('Grapes')
    return list.includes('Mango');
 }
 console.log(findElement());

// 14.Write a function that returns the elements on odd positions in a list.
    function oddElement(){
        let newOddList = [];
        for(var i=0; i<list.length; i++){
            if(i % 2 === 0){
               newOddList.push(list[i]);
            }
        }
        return newOddList;
     }
     console.log("odd position elements in the list are "+ oddElement());

// 15.Write a function that computes the running total of a list.
 
function total(runningTotal){
   //var runningTotal =[];
   Total = 0;
    for(var i=0; i<runningTotal.length; i++){
     Total = runningTotal[i]+ Total;
      }
      return Total;
}
 console.log("running total is "+ total([3,5,8,9]));
