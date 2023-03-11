//EXEMPLO 01

let funcionarios = [
    {id: 1, nome: "César", habilitado: false},   /*CRIA UMA COLEÇA DE OBJETOS QUE POSSUI ID, NOME E SE ESTÁ HABILITADO*/ 
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false}
];

let contador = 0; //DEFINE O VALOR DO CONTADOR COMO 0
let encontrouHabilitado = false; //DEFINE COM INCIO A VARIAVEL COMO FALSA

while ( contador < funcionarios.length ) { //ENQUANTO O CONTADOR FOR MENOR QUE O TAMANHO DO ARRAY, IRÁ EXECUTADOR O LOOP

    let funcionario = funcionarios[contador]; //CRIA UMA VARIAVEL QUE IRÁ GUARDAR O INDICE DO FUNCIONARIO

    if( funcionario.habilitado == true ){ //CASO O INDICE DO FUNCIONARIO TENHA O ATRIBUTO "HABILITADO" COMO TRUE
        console.log("Funcionário habilitado encontrado: " + funcionario.nome); //IRA IMPRIMIR O NOME DO FUNCIONARIO
        encontrouHabilitado = true; //MUDARÁ O VALOR DA VARIAVEL encontrouHabilitado 
        break; //E IRÁ PARAR O LOOP
    }

    contador++; //ADICIONA 1 NO CONTADOR, PARA QUE ELE DE CONTINUIDADE NA CONDIÇÃO DO CÓDIGO
}

if (!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado");
}