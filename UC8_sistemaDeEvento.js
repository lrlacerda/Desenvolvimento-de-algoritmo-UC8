// Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida
// Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
// Listar participantes e palestrantes por evento.
// Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.


let dataDoEvento = new Date(2022,08,05);
let dataDeHoje = new Date(2022,07,30);
let idadeDoParticipante = 37
var listaDeParticipantes = ["Lucas", "Fernando", "Uiara", "Ursula", "Tadeu", "Silvia", "Francisco"]
var listaDePalestrantes = ["Diego, Maria, João"]
var numeroDeParticipantes = 90

if (dataDoEvento > dataDeHoje ) {
    console.log ('Evento Permitido')
}
else {
    console.log ('Cadastro não Permitido --> alert: data Inválida')
}

console.log ('________________________Evento______________________________')

if (idadeDoParticipante >= 18) {
    console.log ('Cadastro permitido')
}
else { 
    console.log ('Cadastro não permitido pela Idade')
}

console.log ('________________________Idade_______________________________')

console.log (listaDeParticipantes)

console.log ('____________________________________________________________')

console.log (listaDePalestrantes)

console.log ('____________________________________________________________')

console.log (listaDeParticipantes.length)


if (listaDeParticipantes.length < 100) {
    console.log ("Cadastro no Evento realizado com sucesso")
}
else {
    console.log ('Cadastro não permitido --> alert: excedido número máximo de participantes')
}












