"use strict" /*ajudar a manter a boa prática e não ter erros */

const botaoTrocarCor = document.getElementById('trocar-cor')
// getElementById significa escolher um elemento pelo id (#) dele

function trocaCor () {
    const cor = document.getElementById('cor').value //valor daquilo que é digitado
    document.documentElement.style.setProperty('--cor-fundo', cor)
    // document é a raiz ou seja o html
    // setProperty mudar uma propriedade (ex: cor)
}

botaoTrocarCor.addEventListener('click', trocaCor)
// addEventListener detecta algum evento ou movimento para executar uma ação
// click executa a ação com o movimento do mouse 


