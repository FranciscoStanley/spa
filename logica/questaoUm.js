
// Questão 1
// Com base no código abaixo, refatore o trecho do IF, convertendo para IF ternário.
// Escreva o código como se os resultados fossem impressos no CONSOLE.

function funcao1() {
    let idade = 18;
    let analfabeto = true;

    const msg = idade < 16 ? "Não pode votar" :
        (((idade >= 16 && idade < 18) || idade > 70) && !analfabeto) || analfabeto ?
            "Voto facultativo" : "Voto obrigatório";

    console.log(msg);
}

funcao1();