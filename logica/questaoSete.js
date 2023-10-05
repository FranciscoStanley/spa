// Questão 7
// Com base no objeto fornecido, mostre o nome completo da pessoa (separado por um espaço em branco),
// usando interpolação/template string,
function funcao7() {
  let arrPessoas = [
    { nome: "Tony", sobrenome: "Stark" },
    { nome: "Scott", sobrenome: "Summers" },
    { nome: "Elizabeth", sobrenome: "Braddock" },
    { nome: "Peter", sobrenome: "Parker" },
    { nome: "Sue", sobrenome: "Storm" },
    { nome: "Remy", sobrenome: "LeBeau" }
  ];

  const personFullName = arrPessoas.map(pessoa => {
    return `${pessoa.nome} ${pessoa.sobrenome}`;
  
  })

  console.log(personFullName);

}

funcao7()