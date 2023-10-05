// Questão 5
// Dado um array recebido, ordene seus valores de forma ascendente e converta os dados para string, separando
// os items por ';'
function funcao5() {
    let array = [6, 2, 3, 5, 4, 1];
    array.sort();
    array = array.join(";")
    console.log(array);
}

funcao5();