/*2.Write a function that rotates a list by k elements. For example [1,2,3,4,5,6]
rotated by two becomes [3,4,5,6,1,2]. Try solving this without creating a copy of
the list. How many swap or move operations do you need?*/

var list = [1,2,3,4,5,6]

function rotateList(k){
    var tempList=[];
//remove k elements and store in tempList
    tempList = list.splice(0,k);   //splice returns the removed items splice(position to remove,number of items to remove)

    console.log(tempList);
    console.log(list);

    var newList = list.concat(tempList); // concat list to tempList
    console.log(newList);
  
    return newList;
}

console.log("Rotate the list "+rotateList(3));
