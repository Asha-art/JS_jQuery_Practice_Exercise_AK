var element = ['Apple','Pineapple','Grapes','Watermelon','Kiwi']

function largestElement(element){
    var largestNum =element[0];
        for(var i=0 ; i < element.length ; i++){
            console.log(element[i].length);
        if (element[i].length > largestNum.length){
                largestNum = element[i];
        }
    }
    return largestNum; 
}

console.log(largestElement(element));  
            