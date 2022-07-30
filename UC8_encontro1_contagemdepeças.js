// se a peça possuir um peso superior a 100gm, pode cadastrar 
// dada a capacidade de cada caixa, caso a lista de peça seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente 
// caso a peça tenha um nome com quantidade inferior a 3 caracteres, informar uma mensagem de erro

console.log ('_________________________________________________')

var pesoDaPeca = 180
if (pesoDaPeca > 100) {
    console.log ("cadastro realizado");
    } 
    else {
        console.log ("cadastro não permitido");
    }

    console.log ('______________________________________________')

var listaDePecas = 10
if (listaDePecas >10) {
    console.log ('Capacidade da caixa excedida'); 
}
else {
    console.log ('Adicionado a caixa');
}

console.log('___________________________________________________')

var nomeDaPeca = 'lanterna'
if (nomeDaPeca.length >3) {
    console.log ('Peça existente');
}
else {
    console.log ('Peça não encontrada')
}

console.log  ('_________________________________________________')

