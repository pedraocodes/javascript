function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 5) {
                //CRIANÇA
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            } else if (idade > 5 && idade <= 15) {
                //ADOLESCENTE
                img.setAttribute('src', 'imagens/foto-crianca-m.png')
            } else if (idade > 15 && idade <= 25) {
                //JOVEM
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if (idade > 25 && idade <= 50) {
                //ADULTO
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else if (idade > 50 && idade <= 110) {
                //IDOSO
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            } else if (idade > 110) {
                //VAMPIRE
                img.setAttribute('src', 'imagens/foto-imortal-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 5) {
                //CRIANÇA
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
            } else if (idade > 5 && idade <= 15) {
                //ADOLESCENTE
                img.setAttribute('src', 'imagens/foto-crianca-f.png')
            } else if (idade > 15 && idade <= 25) {
                //JOVEM
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if (idade > 25 && idade <= 50) {
                //ADULTO
                img.setAttribute('src', 'imagens/foto-adulta-f.png')
            } else if (idade > 50 && idade <= 110) {
                //IDOSO
                img.setAttribute('src', 'imagens/foto-idosa-f.png')
            } else if (idade > 110) {
                //VAMPIRE
                img.setAttribute('src', 'imagens/foto-imortal-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}