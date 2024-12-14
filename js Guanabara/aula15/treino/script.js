function procurar() {
    let bonde = ["Renan", "Isabella", "Juliana", "Gustavo", "Tainã", "Gabriela", "Pedro", "Guilherme"]
    let nome = document.getElementById('put-name')
    let res = document.getElementById('res')
    let pos = bonde.indexOf(nome.value)

    if (pos == -1) {
         res.innerHTML = `<p>Essa pessoa não está na foto.</p>`
    } else if (pos >= 6){
        res.innerHTML = `<p>${nome.value} está na posição ${pos}. No lado direito da foto.</p>`
    } else if (pos <= 3) {
        res.innerHTML = `<p>${nome.value} está na posição ${pos}. No lado esquerdo da foto.</p>`
    } else {
        res.innerHTML = `<p>${nome.value} está na posição ${pos}. No centro da foto.</p>`
    }
}


