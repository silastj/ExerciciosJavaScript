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
//(16)Crie uma função que recebe 2 parâmetros e retorna a soma deles. (e utilize no exercicio 10)
function ssSomar(dadoUm, dadoDois){
    return dadoUm + dadoDois
}
console.log(ssSomar(10,20))
//(17) Crie uma função que recebe 2 parâmetros e retorna a soma deles, porem caso seja passado um parâmetro vazio ela retorne zero.
function ssZero(numeroUm, numeroDois){
    if(numeroUm == undefined || numeroDois == undefined) return 0;
    return numeroUm + numeroDois
}
console.log(ssZero(10))
//(18) Exiba o 'resto' da seguinte divisão: (5 / 2)
const resto = function(aa, bb){
    return aa / bb
}
console.log(`Resto: ${resto(5,2)}`)
//(19) Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro inteiro.
function impaPar(impar){
    if(impar % 2 === 0) return 'Par';return'Impar'
}
console.log(impaPar(-1))
//(20) Crie uma função que recebe 2 parâmetros e retorna a multiplicação deles.
function multiplicacao(nn,mm){
    return nn * mm
}
console.log(multiplicacao(2,2))
//(21) Crie uma função que calcula 5% de desconto retornando o valor do desconto.
const dd = 5
const vv = 10 
function desconto(vv){
    return vv - ((vv * dd) / 100)
}
console.log('O valor inicial ' + vv + ' tem um valor total de desconto é : ' + desconto(vv)) 
//(22) Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.
const dataAtual = new Date().toLocaleDateString() //data completa
const anoR = (dataAtual.substring(6,10)) //ano
const mesR = (dataAtual.substring(3,5)) //mes
const verificado = 18
const totalatual = (anoR - verificado);
const inputValue = document.querySelector('#datevinteDois').addEventListener('change', click)
const resultadoDate = document.querySelector('.datevinteDois')
function click(){
    const datevinte = document.querySelector('#datevinteDois').value
    if(datevinte.substring(0,4) <= totalatual )return resultadoDate.innerHTML ="Maior de idade";return resultadoDate.innerHTML = "Menor de idade"
}
//(23) Dentro da div com o id 'resultado', escreva 1x ('Repetição'). @dica 'innerHTML', el.innerHTML = 'Repetição';
const vintetres = document.querySelector('.vinteTres p')
const ppVinteTres = document.createElement('p')
const ppVinteTresNome = document.createTextNode('Repeticao')
// vintetres.appendChild(ppVinteTres).appendChild(ppVinteTresNome)
//(24) Dentro da div com o id 'resultado', escreva 2x ('Repetição')
const vinteQuatro = document.querySelector('.vinteQuatro p')
const palavra = 'Repetição'
const  nnn = 2
for(var i = 0; i < nnn; i++){
   vinteQuatro.innerHTML += `${palavra} <br>` 
}
//(25) Dentro da div com o id 'resultado', escreva 20x ('Repetição'). (use o 'for' pelo amor de deus)
const vinteCinco = document.querySelector('.vinteCinco p')
const palavraCinco = 'Repetição'
const  nnnCinco = 20
for(var i = 0; i < nnnCinco; i++){
   vinteCinco.appendChild += `${palavraCinco} <br>` 
}
//(26) Dentro da div com o id 'resultado', escreva 5x ('Repetição'). (agora com forEach)
const vinteSeis = document.querySelectorAll('.vinteSeis p')
const resForeach = 'Repetição';
vinteSeis.forEach(function(item){
   item.innerHTML = resForeach
})
//(27 e 28) Dentro da div com o id 'resultado', escreva 5x ('Repetição'). (agora com while)
let o = 0;
const nnnnn = 5;
    while( o < 5){       
    console.log(palavra)
    o++
    }
//(29) Dentro da div com o id 'resultado', escreva os números de 0 ~ 10 (escolha uma das opções acima)
var i = 0;
while(i <=20) {
  console.log(i);
  i++
}
//(30) Dentro da div com o id 'resultado', escreva os números pares até 20... (ex 2,4,6...20)
let numeroTrinta = document.querySelector('.trinta')
const fresco = [1,2,3,4,5,6,7,8,9,10]
function paresS(fresco){
    return (fresco % 2 === 0);
}
const totalN =  fresco.filter(paresS)
numeroTrinta.innerHTML = totalN
//(31) Ok... chega de for(), mentira / #SQN... Exiba a tabuada do 1 até o 10 (for dentro de for?) (caso você escreva de forma manual.. eu vou te bater HSUAHASHUAS)
let nCalc = 10
let fixo = 2
const trintaUm = document.querySelector('.trintaUm')
    for(let i = 1;i <= nCalc; i++){
        trintaUm.innerHTML +=  fixo + 'x ' + i + '='+ (fixo * i) + '<br>'
    } 
//(32) Crie uma função que informa se tem os caracteres 'dota' no parâmetro informado.
const inputTd = document.querySelector('#trintaDois')
const resTrintaDois = document.querySelector('#resTrintaDois')
inputTd.addEventListener('change', ()=> {
    const inputTrintaDois = document.querySelector('#trintaDois').value
    inputTrintaDois === 'dota' ? resTrintaDois.innerHTML = 'Dota é Verdadeiro' : resTrintaDois.innerHTML ='Falso é Dota'  
})
//(33) Exiba aleatoriamente um número pelo alert()
const trintaTres = document.querySelector('#trintaTres')
const resTrintaTres = document.querySelector('#resTrintaTres span')
const resRandom = Math.random() * 100
trintaTres.addEventListener('click', ()=>{   
    resTrintaTres.innerText = ' '
    resTrintaTres.innerText = resRandom.toFixed(0)
})
//(34) Agora faça um botão que ao clicar nele informa se a pessoa acertou o número.
const resTrintaQuatro = Math.random().toFixed(0) * 10
const btnTrintaQuatro = document.querySelector('#btnTrintaQuatro')
btnTrintaQuatro.addEventListener('click', ()=> {    
    const inputTrintaQuatro = +document.querySelector('#trintaQuatro').value
    console.log(resTrintaQuatro, inputTrintaQuatro)  
    inputTrintaQuatro == resTrintaQuatro ? alert('Acertou') : alert('Errou')
})
//(35) Exiba a data atual pelo JavaScript no seguinte formato: dia/mês/Ano
const dataHoje = new Date().toLocaleDateString()
const trintaCinco = document.querySelector('.trintaCinco').innerHTML =  '<br>' + dataHoje
//(36) Exiba o próximo mês (dinamicamente obviamente)
const proxMes = new Date().getMonth()
if(proxMes + 2 > 12){
   console.log(proxMes - 10 )
}
console.log(proxMes + 1)
//(37.a) Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder']
//E Exiba a quantidade/comprimento que ele tem com a função .length
const deuses = ['Aegir', 'Aud', 'Balder']
console.log(deuses.length)
//(37.b) Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder']
//E exiba um a um com alert() - De preferencia para laços de repetição (for, forEach, while, do{}while)
deuses.forEach((item) => {
    console.log(item)
})
//(37.c) Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder']
//E exiba um a um com alert() - De preferencia para funções com callbacks, Ex:(map, reduce, filter)
const resdeuses = deuses.map((e) => {
    console.log(e + 'i')
})
//(37.e) Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder']
//Adicione os 3 Deuses: ('Loki', 'Odin', 'Frey') com a função push()
deuses.push('Loki', 'Odin', 'Frey')
deuses.forEach((item, index) => {
    console.log(index, item)
})
//(37.g) Crie o seguinte array: var numbers = [5, 7, 1, 8, 9]
//E exiba de forma crescente @dica: .sort
const numbers = [5, 7, 1, 8, 9]
console.log(numbers.sort())
//(37.h) Crie o seguinte array: var numbers = [5, 7, 1, 8, 9]
//E exiba de forma decrescente.
console.log(numbers.reverse())
//(38) Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr']
//E exiba todos os nomes, dentro do html: <ul id="nomes"></ul>
const deusesOito = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr']
const trintaOito = document.querySelector('#trintaOito')
const trintaOitoLi = document.createElement('li')
console.log(trintaOito,trintaOitoLi)
const resOito = deusesOito.map((e) => {
    trintaOitoLi.innerHTML += `<li>${e}</li>`
    trintaOito.innerHTML = trintaOitoLi.innerHTML
})
//(39) Crie um campo texto no html que armazena o conteúdo em um array sempre que você clicar no botão, e apresente em uma lista(ul)
