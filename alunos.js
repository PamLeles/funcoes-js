const alunos = [
    {
        nome: 'maria',
        nota:6,
        turma:'10'
    },
    {
        nome:'juan',
        nota:9,
        turma:'15'
    },
    {
        nome:'Sergio',
        nota:5,
        turma:'20'
    },
    {
        nome:'marimar',
        nota:3,
        turma:'20'
    }
];

function alunosAprovados( arr, media){
    let aprovados =[];
    for (let i = 0; i < arr.length; i++){
        const {nota,nome} = arr[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}
console.log(alunosAprovados(alunos,5));