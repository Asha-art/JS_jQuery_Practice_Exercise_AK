// 24.Write a function that takes a number and returns a list of its digits. So for 2342 it
// should return [2,3,4,2].

function digits(n){

    var newArr= n.toString().split('').map(Number);
    console.log(newArr);
    //var newArr1 = newArr.map(Number);
    return newArr;
}
console.log(digits(234552));