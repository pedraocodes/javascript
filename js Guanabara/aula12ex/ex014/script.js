function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.backgroundColor = '#e0bc9d'
    } else if (hora >=12 && hora < 18) {
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.backgroundColor = '#2494c3'
    } else {
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.backgroundColor = '#412e48'
    }
}