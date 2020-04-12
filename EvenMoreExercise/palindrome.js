
// 16.Write a function that tests whether a string is a palindrome
function palindrome(str){
    var reverseName="";
    for (var i=0; i<str.length; i++){   // incrementing loop
        reverseName = str[i] + reverseName;
        //reverseName =  reverseName + str[i];
       // console.log(reverseName);
    }
    //return reverseName;
    if(str === reverseName){
        console.log("The string entered is a palindrome");
        return true;
    }else{
        console.log("Not a palindrome");
        return false;
    }
}
console.log(palindrome('apple'));


// 2nd way of reversing a string -decrementing loop
/*function palindrome(str){
    var reverseName="";
    for (var i=str.length-1; i>=0; i--){   
        //reverseName = str[i] + reverseName;
        reverseName =  reverseName + str[i];
       // console.log(reverseName);
    }
    return reverseName;
}*/
//console.log(palindrome('apple'));
