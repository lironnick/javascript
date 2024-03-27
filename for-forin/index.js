import { obterPessoas } from './service.js';

async function main() {
  try {
    const result = await obterPessoas('a');
    const names = [];

    console.log(`Quantidade de registro QTD: ${result.length}`);
    console.time('for');
    for (let i = 0; i <= result.length - 1; i++) {
      const pessoa = result[i];
      names.push(pessoa.name);
    }
    console.timeEnd('for');

    console.time('for in');
    for (let i in result) {
      const pessoa = result[i];
      names.push(pessoa.name);
    }
    console.timeEnd('for in');

    console.time('for of');
    for (let pessoa of result) {
      names.push(pessoa.name);
    }
    console.timeEnd('for of');

    console.time('map');
    result.map((pessoa) => names.push(pessoa.name));
    console.timeEnd('map');

    console.time('forEach');
    result.forEach((pessoa) => {
      names.push(pessoa.name);
    });
    console.timeEnd('forEach');

    // console.log(`names`, names);
  } catch (error) {
    console.log(error);
  }
}

main();
