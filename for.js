import laco_for from 'readline-sync';

//EXEMPLO 01

let multiplicador = laco_for.question("Qual o número que deseja saber a tabuada: ");

console.log("Tabuada de multiplicação do Nº " + multiplicador);

for ( let contador = 0; contador <= 10; contador++ ) {

    let resultado = multiplicador * contador;

    console.log( multiplicador + " x " + contador + " = " + resultado );

}
