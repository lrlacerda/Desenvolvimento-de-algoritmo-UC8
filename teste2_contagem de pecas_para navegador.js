

var pesoDaPeca = parseFloat(window.prompt("Peso da Peça:"))
var capacidadeCaixa = parseFloat(window.prompt("Numaro de peças"))
var nomeDaPeca = (window.prompt("Nome da Peça"))
var tamanhoNomePeca = nomeDaPeca.length

if (pesoDaPeca < 100) {
    alert ("Cadastraddo")
  
} else {
    alert ("Peça não pode ser Cadastrada") 
} 

if (capacidadeCaixa <= 10) {
    alert ("capacidade permitida")  

} else {
    alert ("Capacidade excedida")
}

if (tamanhoNomePeca > 3) {
    alert ("Peça Cadastrada")
    
} else {
    alert ("Nome da peça não encontrada")
    
}