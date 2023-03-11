import multa from 'readline-sync';

/*EXEMPLO 1 

let contador = 0;

do{
    console.log(contador);
    contador ++;
} while(contador < 5);*/

/*EXEMPLO 2

let contador = 0;

let meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

do{
    console.log(meses[contador]);
    contador ++
} while(contador < meses.length)*/

/*EXEMPLO 3

let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false},
];

let contador = 0;
let encontrouHabilitado = false;

do {

    let funcionario = funcionarios[contador];

    if( funcionario.habilitado == true ){
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break;
    }

    contador++;
} while ( contador < funcionarios.length );

if (!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado");
}*/

/*EXEMPLO 4

let alunos = [
    {id: 1, nome: "Bruna", media: 8},
    {id: 2, nome: "Laura", media: 7},
    {id: 3, nome: "José", media: 5},
    {id: 4, nome: "Guilherme", media: 4},
    {id: 5, nome: "Rafael", media: 10},
];

let contador = 0;

do {

    let aluno = alunos[contador];

    contador++;

    if ( aluno.media < 6 ) {
        continue;
    }

    console.log("Id: " + aluno.id);
    console.log("Nome: " + aluno.nome);
    console.log("Média: " + aluno.media);
    console.log("\n");

} while ( contador < alunos.length );*/

//EXEMPLO 5

let valor_mensalidade = multa.question("Qual o valor da mensalidade? R$: ");
let taxa_multa = 0.02; //2%
let total_dias = 10;
let contador = 1;

do{
    let dias_atraso = contador;

    let valor_multa = valor_mensalidade * taxa_multa * dias_atraso;

    let novo_valor_mensalidade = Number(valor_mensalidade) + valor_multa;

    console.log("Dia(a) de atraso: " + dias_atraso + "- mensalidade atualizada R$" + novo_valor_mensalidade + ",00");

    contador ++;
} while(contador < total_dias);