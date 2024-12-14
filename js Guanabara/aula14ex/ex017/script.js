function gerar() {
    var number = document.querySelector('input#number').value
    var res = document.querySelector('div#res')

    res.innerHTML = ""

    if (number == "") {
        window.alert('Por favor, digite um número.')
    } else {
        number = Number(number)

        for (var x = 1; x <= 10; x++) {
            res.innerHTML += `<p>${number} x ${x} = ${number * x}</p>`
        }
    }
}