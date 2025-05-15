import Entrada from 'readline-sync';

let sexo =Entrada.question('informe seu sexo: ').toUpperCase;

switch (sexo) {
    case 'M':
        console.log('Homen!');
        break
    case 'F':
        console.log('Femea');
        break;
    default:
        console.log('escreve direito pô');
        break;
}