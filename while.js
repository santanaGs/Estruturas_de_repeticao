import calculo from 'readline-sync';

/*EXEMPLO 01

let contador = 0;

while(contador < 5){
    console.log(contador);
    contador ++; //necessário para que a variável seja incrementeda e o código rode
} */

/*EXEMPLO 02

let numero = calculo.question("Digite um número:");
let contador = 0;

console.log("Tabuada de multiplicação - N° " + numero);

while (contador <= 10){
    let resultado = numero * contador; //recebe o valor da multiplicação entre o número desejado e o contator

    console.log(numero + " x " + contador + " = " + resultado); //imprime as variáveis

    contador ++; //incrementa o contador
}*/

/*EXEMPLO 3

let capital_emprestado = calculo.question("Qual o valor emprestado? R$: ") //SOLICITA QUAL O VALOR EMPRESTADO
let taxa_juros = 0.02; //2%

let contador = 1;
let parcelas_totais = calculo.question("Qual o total de parcelas? "); //pergunta a quantidade de parcelar do emprestimo

while(contador <= parcelas_totais){ //enquanto o contador for menor ou igual o número de parcelas, irá executar a função
    let numero_parcelas = contador; //número de parcela receberá a qtd do contador

    let juros_emprestimo = capital_emprestado * taxa_juros * numero_parcelas; //calculo de juros

    console.log("A taxa de juros no período de "+ numero_parcelas + "mes(es) é de R$" + juros_emprestimo + ",00"); //imprime o resultado do juros

    contador++; //adiciona uma unidade no contador, toda vez q a condição do while for verdadeira
} */

/*EXEMPLO 4
let contador = 10;
while ( contador > 0 ) {
    console.log( contador );
    contador--;
} */

/*EXEMPLO 5

let paises = ["Brasil", "Suiça", "França", "Japão", "Italia"]; //cria um array(coleçaõ de dados)

let contador = 0; //declara a quantidade incial do cantador

while(contador < paises.length){ //enquanto o contador for menor que o número de dados dentro do array será executado a função
    console.log(paises[contador]);
    contador ++;
}*/

/*EXEMPLO 6

let numeros = [10, 5, 7, 8, 9, 6, 12, 4]; //CRIA UMA COLEÇÃO DE DADOS (ARRAY)

let total_impares = 0; //Declara o valor inicial da variavel como 0
let total_pares = 0; //""

let contador = 0; //informa que o contador irá iniciar com 0

while ( contador < numeros.length ) { //enquanto o contador for menor que o tamanho do array, irá executar a função

    if( numeros[contador] % 2 == 0 ){ //CASO A DIVISAO DO NÚMERO DENTRO DO ARRAY PRO 2 O RESTO FOR 0, IRÁ ADICIONAR UMA UNIDADE NA VARIAVEL TOTAL_PARES
        total_pares++;
    } else { //CASO CONTRARIO IRÁ ADICIONAR UMA UNIDADE NA IMPARES
        total_impares++;
    }

    contador++; //INCRMENTA UMA UNIDADE NO CONTADOR, IRÁ EXECUTAR ATÉ O CONTADOR TER O MESMO VALOR DO TAMANHO DO ARRAY

}

console.log(" O total de números ímpares é: " + total_impares); //IMPRIME A QUANTIDADE DE NÚMERO IMPARES
console.log(" O total de números pares é: " + total_pares); //IMPRIME A QUANTIDADE DE NÚMERO PARES */

//EXEMPLO 7

let alunos = ["Gabriel","Lucas","Matheus","Michele","Marcio"] //DECLARA UMA COLEÇAO DE DADOS (ARRAY)

let contador = 0; //DEFINE O VALOR INCIAL DO CONTADOR COMO 0

while(contador < alunos.length){ //ENQUANTO O CONTADOR FOR MENOR QUE O TAMANHO DO ARRAY, EXECUTE A SEGUINDO TAREFA:
    
    let aluno_nome = alunos[contador]; //GUARDA O INDICE DO ARRAY NA VARIAVEL ALUNO_NOME

    console.log("Aluno: " + contador + " " + aluno_nome); //IMPRIME O NOME DO ALUNO E SEU DETERMINADO INDICE/POSIÇÃO
    contador ++ //ADICIONA 1 NO CONTADOR E EXECUTA O CÓDIGO ATÉ O SEU LIMITE (TAMANHO DO ARRAY)
}
