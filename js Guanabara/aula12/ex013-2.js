var agora = new Date()
var diaSem = agora.getDay()

if (diaSem == 0) {
    console.log('Domingo')
} if (diaSem == 1) {
    console.log('Segunda-feira')
} if (diaSem == 2) {
    console.log('Terça-feira')
} if (diaSem == 3) {
    console.log('Quarta-feira')
} if (diaSem == 4) {
    console.log('Quinta-feira')
} if (diaSem == 5) {
    console.log('Sexta-feira')
} if (diaSem == 6) {
    console.log('Sábado')
} else {
    console.log('Erro - Dia inválido')
}
