//1
console.log('Inicio de programa');

//5
setTimeout( () => {
    console.log('Primer Timeout');
}, 3000 );


//3 esta se ejecuta de tercero por que Node tratara a setTimeout
//en un hilo independiente
setTimeout( () => {
    console.log('Segundo Timeout');
}, 0 );

//4
setTimeout( () => {
    console.log('Tercer Timeout');
}, 0 );

//2
console.log('Fin de programa');