let comida = 'pão na chapa';
let bebida = 'café';

if (bebida === 'café' && comida === 'pão na chapa') {
  console.log('Muito obrigado(a) pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

// ! Para exercitar, mude os valores das variáveis. Você verá que a condição não vai ser atendida e que, portanto, a mensagem impressa será outra.

// ! Precisamos manter em mente que só teremos true se as duas expressões em volta dele forem true também.


let conditionOne = true;
let conditionTwo = false;

console.log(conditionOne && conditionTwo);

// ? Execute o código acima e veja que a verificação é false porque uma das condições não é true.

// ? E o que acontecerá se houver um encadeamento de &&? 🤔

// ?  Considere a seguinte expressão:

let cenouras = true;
let leite = true;
let arroz = true;
let feijao = true;

let listaDeCompras = cenouras && leite && arroz && feijao;