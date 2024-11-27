function contar() {
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    var contagem = document.querySelector('div#contagem')

    if (inicio === "" || fim === "" || passo === "") {
        contagem.innerHTML = `<p> Impossível contar.</p>`
        return
    }

// return é um atributo usado para interromper o script

    inicio = Number(inicio)
    fim = Number(fim)
    passo = Number(passo)

    if (passo === 0) {
        passo = 1
        window.alert('Passo inválido! Considerando valor 1.')
    }

    if (inicio <= fim) {
        contagem.innerHTML = ""
        while (inicio <= fim) {
            contagem.innerHTML += `<p>${inicio} &#x1F449</p>`
            contagem.style = 'display: inline'
            inicio = inicio + passo
        }
        contagem.innerHTML += `<p>&#x1F3F4</p>`
    }
}

// tem que converter pra number, os campos input são mapeados como string quando saem do DOM.