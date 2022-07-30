// se o número for par, escreva par e onúmero correspondente.
//se o número for ímpar, escreva ímpar e onúmero correspondente.
//se o número for zero, escreva zero e o número correspondente.


let numeroDeAlunos = 15;

for (let aluno = 0; aluno < numeroDeAlunos; aluno++) 
{
    console.log (aluno)

    if (aluno == 0)
    {
        console.log ('classificado como 0') 
    }

    if (aluno % 2 == 0) 
    {
        console.log ('número Par')
    }
    else {
        console.log ('número Ímpar')
    }

    }
