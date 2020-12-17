//(1) Faça uma mensagem de 'Olá Mundo'.... Exemplo: 'Olá Mundo'
console.log('Olá Mundo')
//(2) Faça essa mensagem em um arquivo javascript externo e chame ela... (Importado)
console.log('Olá Mundo')
//(3) Faça uma saída de soma de 2 inteiros, ex: alert(2 + 2) - Somar dois Inteiros
function Somar(numero1, numero2){
    return numero1 + numero2
}
console.log(Somar(10,10))
//(4) No HTML Crie:
//1 - Campo/Input do tipo text para preencher o nome completo.
//1 - Botão com o texto: 'Exibir Nome' e ao clicar neste botão é exibido um alert com o valor do campo nome completo, ex: ' O Nome Completo é: "xxxx". '
const btn4 = document.querySelector('button')
btn4.addEventListener('click', ()=>{
    const input4 = document.querySelector('input').value
    alert(`O Nome Completo é :${input4}`)
})
//(5) exiba a quantidade de letras que possuem o texto inserido ao clicar no botão
const btn5 = document.querySelector('#btn5')
btn5.addEventListener('click', ()=> {
    const input5 = document.querySelector('#input5').value.length
    console.log(`O nome digitado tem: ${input5} letras`)
})
//(6) No seu HTML exiba a imagem de uma lampada, ao clicar em cima da lampada, troque o src dela para a lampada que está acessa.
const img6 = document.querySelector('#img6')
const btn6 = document.querySelector('#btn6')
btn6.addEventListener('click', ()=> {
    img6.setAttribute('src', 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true')
})
//(7) Agora que você já sabe utilizar o evento 'click', aprenda a usar o 'mouseover', ao passar o mouse em cima da 'lampada.jpg' altere ela para 'lampada-on.jpg' (Exemplo abaixo).
img6.addEventListener('mouseover', ()=> {
    img6.setAttribute('src', 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true')
})
//(7a) Faça 2 campos no HTML chamados: 'Nome', 'Sobrenome' e um botão 'Saudação'; ao clicar no botão exibir um alert: 'Olá {NOME} {SOBRENOME}'

const btn7 = document.querySelector('#btn7')
btn7.addEventListener('click', ()=> {
    const input7a = document.querySelector('#input7a').value
    const input7b = document.querySelector('#input7b').value
    alert(`Olá ${input7a}-${input7b}`)
})
//(8) Crie um campo texto parar preencher um CPF <input maxlength="11" id="cpf" />, e exiba ao lado com pontuação conforme preencher

const span = document.querySelector('#cpfspan')
const cpfKeyUp = document.querySelector('#cpf')
cpfKeyUp.addEventListener('keyup', ()=> {
    const cpf = document.querySelector('#cpf').value
    span.innerHTML = mCPF(cpf)
})
function mCPF(cpf){
    cpf=cpf.replace(/\D/g,"")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    return cpf
}
//(9) Preencha um CPF com pontuação <input maxlength="14" id="cpfPoint" /> e no campo ao lado exiba sem pontuação.
const span1 = document.querySelector('#cpfspan1')
const cpfKeyUp1 = document.querySelector('#cpf1')
cpfKeyUp1.addEventListener('keyup', ()=> {
    const cpf1 = document.querySelector('#cpf1').value
    span.innerHTML = cpf1
})
//(10) No HTML Crie:
//2 x - Campo/Input do tipo text. (id=soma1, id=soma2)
//1 x - Botão (id=btn-soma)
//1 x - Campo (id=resultado-soma)
//Caso esteja preenchido um valor númerico nos dois campos(id=soma1, id=soma2), 
//O resultado da soma devera aparecer no campo (id=resultado-soma) ao clicar no botão (id=btn-soma).
const inputc = document.querySelector('#input10c')
const resultado10 = document.querySelector('#res10')
inputc.addEventListener('click', ()=> {
    const input10a = parseInt(document.querySelector('#input10a').value)
    const input10b = parseInt(document.querySelector('#input10b').value)
    resultado10.innerHTML = (`Resultado da soma :${input10a + input10b}`)
})
//(12) Faça um comentário de uma linha no JavaScript no exercicio anterior
//Comentario na linha anterior

//(12.a) Crie dois botões no HTML chamados: 'Verde', ,'Vermelho'. ao clicar neles, 
//o style="background-color: {COR-SELECIONADA}" vai ser alterado dinamicamente Alterar-Style de uma div

const btndoze = document.querySelector('#btn12a')
const btndoze1 = document.querySelector('#btn12a1')
const div12 = document.querySelector('#div12')
btndoze.addEventListener('click', ()=> {
    div12.style.backgroundColor = 'green' 
})
btndoze1.addEventListener('click', ()=> {
    div12.style.backgroundColor = 'yellow'
})
//(13) Faça um comentário de varias linhas no JavaScript no exercicio anterior do CPF.
//(14) Crie uma div vazia cujo o id dela é 'resultado' Insira via JavaScript assim que a tela carregar o seguinte texto: 'Esse texto foi inserido pelo JavaScript...'
function iniciar(){
    const divresultado14 = document.querySelector('#resultado14')
    divresultado14.innerHTML = 'Novo'
}
window.onload = function() {
    //iniciar()
}
//(15) Agora crie um botão que ao ser clicado faça a mesma ação do exercício anterior.
const aquinze = document.querySelector('#btn151')
aquinze.addEventListener('click', iniciara) 
function iniciara(){
    const divresultado14 = document.querySelector('#resultado14')
    divresultado14.innerHTML = 'Novo'
}