let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)

let pos = num.indexOf(9) 
if (pos == -1) {
    console.log('O valor não existe no vetor')
} else {
    console.log(`O volar está na posição ${pos}.`)
}

// Aqui é usado o -1 no if, pois esse é o valor que aparece quando o valor procurado não existe no vetor