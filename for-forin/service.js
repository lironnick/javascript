import axios from 'axios';
// const URL = `https://randomuser.me/api/`;
// const URL = `https://jsonplaceholder.typicode.com/users`;
const URL = `https://jsonplaceholder.typicode.com/comments`;

export async function obterPessoas(nome) {
  const url = `${URL}/?search=${nome}&format=json`;
  const response = await axios.get(url);
  return response.data;
}
