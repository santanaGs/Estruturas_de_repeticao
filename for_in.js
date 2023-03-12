import for_in from 'readline-sync';

/*EXEMPLO 1

let aluno = {nome: "Gabriel", email:"gabriel@teste.com.br", idade:20};

for(let dados in aluno){ //*DADOS* REPRESENTA A  PROPRIEDADE DO OBJETO QUE ESTÁ SENDO ITERADA 
    console.log(aluno[dados]);
}*/

/*EXEMPLO 2

let carro = { nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020 };

let percentual_desconto = 5;

for (let propriedade in carro) {

    if (propriedade == "preco") {

        let preco = propriedade;
        let desconto = (carro[preco] * percentual_desconto) / 100;
        let novo_preco = carro[preco] - desconto;

        console.log("novo preço: R$" + novo_preco + ",00");

    } else {
        console.log(propriedade + ": " + carro[propriedade]);
    }
}*/

//EXEMPLO 3

let produtos = [
    { id: 1, nome: "pizza", preco: 50 },
    { id: 2, nome: "macarronada", preco: 25 },
    { id: 3, nome: "lasanha", preco: 45 },
    { id: 4, nome: "nhoque", preco: 30 }
];

let desconto = 5;

for ( let contador = 0; contador < produtos.length; contador++ ){

    let produto = produtos[contador];

    for ( let propriedade in produto ){

        if ( propriedade == "preco" ) {

            let preco = propriedade;

            let novo_preco = produto[preco] - desconto;

            console.log("preço atualizado: R$" + novo_preco + ",00");

        } else {
            console.log(propriedade + ": " + produto[propriedade]);
        }

    }
    console.log("\n");
}
