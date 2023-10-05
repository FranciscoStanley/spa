// Questão 8
// Dado o array de IDs fornecido, crie via dinâmicamente a estrutura HTML comentada abaixo, exatamente na mesma
// ordem, salve a estrutura na variável "htmlTemplate" e mostre no console como string

function funcao8() {
    let arrIds = [3, 2, 1];
    let htmlTemplate;
    arrIds.sort()
    htmlTemplate = '<div id="divPacientes" class="d-flex">\n'
    arrIds.forEach(element => {
       htmlTemplate += `\n<div class="flex-fill" id="divPac${element}">\n<button class="btn" onclick="console.log('paciente${element}');">Paciente ${element}</button>\n</div>\n`
    })
    htmlTemplate += '</div >'
    console.log(htmlTemplate);
}

funcao8()