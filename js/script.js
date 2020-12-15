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