// Questão 4
// Dado um array de objetos, filtre apenas os registros onde o ESTADO seja DF, armazenando estes em um novo array
// de objetos e mostrando esse novo array no CONSOLE.
function funcao4() {
    let pessoasDF;
    
    const pessoas = [
      { nome: "Joana", estado: "DF" },
      { nome: "Raquel", estado: "SP" },
      { nome: "Renato", estado: "DF" },
      { nome: "Iago", estado: "ES" },
      { nome: "Douglas", estado: "RJ" }
    ];
    
    pessoasDF = pessoas.filter(pessoa => {
      return pessoa.estado === "DF"
    })

    console.log(pessoasDF);
}

funcao4()