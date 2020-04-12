//  Write a program that prints a multiplication table for numbers up to 12.

    var product = "";
    for(var i=1; i<=10; i++){ 
        for (var j = 1; j <=10; j++) {
        
            if(i>0 && j>0){
        product += (i*j) + ' ';
        }
        
    } 
    product += '\n'
  }
  console.log (product);



  //   for (var i = 0; i < 11; i++) {
//     for (var j = 0; j < 11; j++) {
//         if(i == 0 && j > 0){
//           product += '[' + j + ']';
//         } 
//         else if(j == 0 && i>0){
//           product += '[' + i + '] ';
//         } 
//         else
//          if(i>0 && j>0){
//         product += (i*j) + ' ';
//         }
//     }
//     product += '\n'
// }
// console.log(product);