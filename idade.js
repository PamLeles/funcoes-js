function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome:'Aghata',
    idade: 30

};
const pessoa2 = {
    nome:'alan',
    idade:15

};
const pessoa3 = {
    nome:'Josuel',
    idade:45
};
const animal1 = {
    nome: 'thor',
    idade: 5,
    raça: 'pug'
};
const animal2 = {
    nome: 'blue' ,
    idade:5,
    especie: 'ave'
};

//console.log(calculaIdade.call(animal2,6));
console.log(calculaIdade.apply(animal1,[4]));