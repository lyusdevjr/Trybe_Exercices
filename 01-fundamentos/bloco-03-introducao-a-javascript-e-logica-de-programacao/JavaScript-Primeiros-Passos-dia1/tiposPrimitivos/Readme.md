Saiba mais 💡: Os operadores de incremento (++) e decremento (--) são utilizados em várias linguagens, porém a recomendação é utilizar a += 1 em vez de a++ ou ++a. Além de tornar a leitura mais nítida, essa prática evita erros de interpretação quando utilizado sem o ponto e vírgula ao final da linha. Veja a documentação do eslint.

Copiar
let a = 0;
console.log(a++); // 0, pois o console.log ocorre antes do incremento.
// menos nítido

let a = 0;
console.log(a += 1); // 1, pois a atribuição ocorre antes

let a = 0;
a += 1;
console.log(a); // leitura mais nítida
O exemplo abaixo apresenta as informações de um paciente. Utilize o operador typeof para imprimir o tipo das variáveis patientId, isEnrolled, patientInfo e patientEmail. Esse operador retorna o tipo de uma variável, o objeto, a função ou a expressão? Exemplo: console.log(typeof patientId) retornará number.

Copiar
let patientId = 50;
let isEnrolled = true;
let patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
let patientEmail = 'ana@email.com';
O que aconteceria se tentássemos checar o tipo da variável patientAge? Experimente executar o comando console.log(typeof patientAge) e veja o que acontece! Ué… mas não declaramos essa variável, não é mesmo? É exatamente por esse motivo que o seu tipo é undefined, como você pôde observar no retorno do console.log(typeof patientAge). Além disso, experimente trocar o valor de patientId = 50 para patientId = '50'. Execute novamente um console.log() para imprimir o tipo dessa variável após a modificação. Você verá que o retorno agora é uma string, pois colocamos o número 50 dentro das aspas. Assim, o JavaScript interpreta como string tudo o que estiver entre aspas.