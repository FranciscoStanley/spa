// Questão 6
// Percora os items do array1 e insira no array2 os valores maiores que 25
function funcao6() {
  let array1 = [1, 30, 22, 25, 45, 18, 32, 64, -5, 10, 78];
  let array2 = []

  const biggers = array1.filter((value) => { 
    return value > 25;
  });
 
  biggers.map(bigger => {
    return array2.push(bigger);
  });

  console.log(array2);
}

funcao6()