let numero = document.getElementById('txtn')
let sel = document.getElementById('selnum')
let info = document.getElementById('info')
let n = []

function adicionar() {
    let num = Number(numero.value)
    if (num < 1 || num > 100) {
        window.alert('Valor inválido ou já encontrado na lista.')
    } else {
        n.push(num)
        let opt = document.createElement('option')
        opt.text = `Valor ${num} adicionado.`
        sel.appendChild(opt)
        numero.value = "" 
    }
}

function finalizar() {
    n.sort()
    window.alert(`${[n]}`)
    info.innerHTML = `<p>Ao todo, temos ${n.length} números cadastrados.</p>`
    info.innerHTML += `<p>${n}</p>`


}



