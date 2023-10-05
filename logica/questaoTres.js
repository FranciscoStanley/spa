// Questão 3
// Complete o código abaixo de forma que o método que já está recebendo a string de nomes converta a string para
// um array, onde cada nome deve ser um item do array e ao final exiba o novo array no console

let stringOfNames = 'Marcos, Phelipe, Ulysses, Deivit, Edmo';

function funcao3(strNomes) {

    let arrNomes = [];
    let nomes = strNomes.split(",");
    
    nomes.forEach(nome => {
        arrNomes.push(nome.trim());
    })

    return arrNomes;
}

console.log(funcao3(stringOfNames));