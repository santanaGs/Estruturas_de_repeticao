let alunos = [
    {id: 1, nome:"Bruna",media: 8},
    {id: 2, nome:"Laura", media: 7},
    {id: 3, nome:"José", media: 5}, //DECLARA A COLEÇAO DE OBJETOS
    {id: 4, nome:"Guilherme", media: 4},
    {id: 5, nome:"Rafael", media: 10},
];

let contador = 0; //DECLARA O VALOR INCIAL DO CONTADOR

while(contador < alunos.length){ //ENQUANTO O CONTADOR FOR MENOR QUE O TAMANHO DA COLEÇAO EXECUTA
    let aluno = alunos[contador]; //DECLARA UMA VARIAVEL ALUNO, QUE RECEBE INDICE DO ALUNO NO ARRAY

    contador ++; //ADICIONA 1 AO CONTADOR

    if(aluno.media < 6){ //CASO A MEDIA DO ALUNO SEJA MENOR QUE 6, PASSE PRO PROXIMO ALUNO
        continue;
    }

    console.log("Id: " + aluno.id);
    console.log("Nome: " + aluno.nome);
    console.log("Média: " + aluno.media);
    console.log("\n");
}