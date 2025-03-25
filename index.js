
// console.log(process.argv);


// let frase = process.argv[2];
// let frase2 = 'Hello Boolean';

// if (frase === undefined){
//     console.log(frase2);
// }

let frase2 = 'Hello Boolean';
let frase = process.argv[2] ?? frase2;
console.log(frase);
