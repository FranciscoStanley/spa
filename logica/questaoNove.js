// Questão 9
// Complete a função abaixo, fazendo com que a mensagem "Hello, World!" seja mostrada 1x imediatamente ao 
// carregar a função e em seguida, 1x a cada 2 segundos
function funcao9() {
  let msg = "Hello, World!";
  console.log(msg)
}

async function call() {
  funcao9();
  setInterval(call, 2000);
}

call()