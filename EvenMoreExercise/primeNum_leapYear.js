/*Write a program that prints all prime numbers. (Note: if your programming
    language does not support arbitrary size numbers, printing all primes up to the
    largest number you can easily represent is fine too.)*/

    //var num = [2,3,4,5,6,7,8,9];
    
    for(var num = 2; num <= 100 ; num++){
        var primeNum = false;

       for(var x = 2; x <= 100; x++){
        if(num % x === 0  && num!== x){
            var primeNum = true;
        }

       }
       if(primeNum === false){
       console.log(num);
            
    }  
}
// print next 20 leap year
for (var i=2020; i < 3010; i++) {
    if (((i % 4) == 0) && ((i % 100) != 0) || ((i%400) == 0 ))  {
    console.log(i);
    }
  }



