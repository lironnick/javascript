const EventEmitter = require('events');

class MeuEmissor extends EventEmitter {}

const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuario:click';

meuEmissor.on(nomeEvento, function (click) {
  console.log('um usuário clicou', click);
});

// meuEmissor.emit(nomeEvento, 'na barra de rolagem');
// meuEmissor.emit(nomeEvento, 'no ok ');

// let count = 0;
// setInterval(function () {
//   meuEmissor.emit(nomeEvento, 'no ok ' + count++);
// }, 1000);

/* TIPO 1 VERIFICAR EVENTO, DESSE CASO QUANDO DIGITA ALGUMA COISA NO TERMINAL */
const stdin = process.openStdin();
stdin.addListener('data', function (valeu) {
  console.log(`Voce digitou: ${valeu.toString().trim()}`);
});

/* TIPO 3 VERIFICAR EVENTO, DESSE CASO QUANDO DIGITA ALGUMA COISA NO TERMINAL */
function main() {
  return new Promise(function (resolve, reject) {
    const stdin = process.openStdin();
    stdin.addListener('data', function (valeu) {
      //   console.log(`Voce digitou: ${valeu.toString().trim()}`);
      return resolve(valeu);
    });
  });
}

main().then(function (resultado) {
  console.log('resultado', resultado.toString());
});
