// site para regex regex101.com

const date = new Date('2024-12-27 00:00');

console.log(
  date.toLocaleDateString('pt-br', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
);
