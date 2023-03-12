import laco_for from 'readline-sync';

/*EXEMPLO 01

let multiplicador = laco_for.question("Qual o número que deseja saber a tabuada: ");

console.log("Tabuada de multiplicação do Nº " + multiplicador);

for ( let contador = 0; contador <= 10; contador++ ) {

    let resultado = multiplicador * contador;

    console.log( multiplicador + " x " + contador + " = " + resultado );

}*/

/*EXEMPLO 2

let meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

for ( let contador = 0; contador < meses.length; contador ++){
   
    console.log(meses[contador]);
}*/

/*EXEMPLO 3

let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false},
];

let encontrouHabilitado = false;

for ( let contador = 0; contador < funcionarios.length; contador++ ) {

    let funcionario = funcionarios[contador];

    if( funcionario.habilitado == true ){
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break;
    }

}

if (!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado");
}*/

/*EXEMPLO 5

let alunos = [
   {id: 1, nome: "Bruna", media: 8},
   {id: 2, nome: "Laura", media: 7},
   {id: 3, nome: "José", media: 5},
   {id: 4, nome: "Guilherme", media: 4},
   {id: 5, nome: "Rafael", media: 10},
  ];

  for ( let contador = 0; contador < alunos.length; contador++ ) {

   let aluno = alunos[contador];

   if ( aluno.media < 6 ) {
   continue;
   }

   console.log("Id: " + aluno.id);
   console.log("Nome: " + aluno.nome);
   console.log("Média: " + aluno.media);
   console.log("\n");

  }*/

  //EXEMPLO 6

let notas_trimestrais = [7, 8, 6, 5]; //COLEÇÃO DE DADOS COM AS NOTAS DO TRIMESTRE

let soma_notas = 0; //DEFINE A SOMA DAS NOTAS COMO 0
const quantidade_notas = 4; //DEFINE UM VALOR CONSTANTE DE QUANTIDADE DE NOTAS

for ( let contador = 0; contador < quantidade_notas; contador++ ) { //ENQUANTO O CONTADOR FOR MENOR QUE A QUANTIDADE DE NOTAS, IRÁ EXECUTAR O LOOP

    soma_notas = soma_notas + notas_trimestrais[contador]; // A CADA VOLTA DO LOOP, IRÁ SOMAR O VALOR DA NOTA DENTRO DO ARRAY COM A QUE ESTÁ GUARDADA DENTRO DA LET SOMA_NOTAS

}

let media = soma_notas / quantidade_notas; //REALIZA O CALCULO DA MEDIA DAS NOTAS

if ( media >= 6 ) {
    console.log("Aprovado"); //CASO A MEDIA SEJA MAIOR OU IGUAL A 6, IMPRIME APROVADO
} else {
    console.log("Reprovado"); // CASO CONTRARIO, REPROVADO
}
