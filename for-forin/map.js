import { obterPessoas } from './service.js';

Array.prototype.meuMap = function (callback) {
  const newArray = [];
  for (let i = 0; i <= this.length - 1; i++) {
    const resultado = callback(this[i], i);
    newArray.push(resultado);
  }

  return newArray;
};

async function main() {
  try {
    const result = await obterPessoas('a');

    console.time('meuMap');
    const names = result.meuMap(function (pessoa, i) {
      return `[${i}] ${pessoa.name}`;
    });
    console.timeEnd('meuMap');

    console.time('map');
    const map = result.map((pessoa, i) => `[${i}] ${pessoa.name}`);
    console.timeEnd('map');

    // console.log('names', map);
    // console.log('names', names);
  } catch (error) {
    console.log(error);
  }
}

main();
