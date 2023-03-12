import for_of from 'readline-sync';

/*EXEMPLO 1

let emails_alunos = [
    "danilo@email.com",
    "jessica@email.com",
    "luana@email.com",
    "gustavo@email.com"
];

for ( let email of emails_alunos ) {

    console.log("Email: " + email);

}*/

/*EXEMPLO 2

let clientes_array = [
    {id: 1, nome: "Mônica", telefone: "99999-6565"},
    {id: 2, nome: "Tânia", telefone: "99999-0778"},
    {id: 3, nome: "Carlos", telefone: "99999-0551"}
];

for ( let cliente of clientes_array ) {

    let nome = cliente.nome;
    let telefone = cliente.telefone;

    console.log("Nome: " + nome + " - Telefone: " + telefone);

}*/

/*EXEMPLO 3

let clientes_array = [
    {id: 1, nome: "Mônica", telefone: "99999-6565"},
    {id: 2, nome: "Tânia", telefone: "99999-0778"},
    {id: 3, nome: "Carlos", telefone: "99999-0551"}
];

for ( let cliente of clientes_array ) {

    let nome = cliente.nome;
    let telefone = cliente.telefone;

    console.log("Nome: " + nome + " - Telefone: " + telefone);

}*/

//EXEMPLO 4

let notas_trimestrais = [9, 7, 6, 7];

let total_notas = notas_trimestrais.length;
let soma_notas = 0;

for ( let nota of notas_trimestrais ) {

    soma_notas = soma_notas + nota;

}

let media = soma_notas / total_notas;

console.log("Média: " + media);

if ( media >= 7 ) {

    console.log("Aprovado");

} else if ( media >= 6 && media < 7 ) {

    console.log("Recuperação");

} else {

    console.log("Reprovado");

}