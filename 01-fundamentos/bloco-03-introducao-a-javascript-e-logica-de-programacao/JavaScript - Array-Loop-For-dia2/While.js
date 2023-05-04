
let dado1 = Math.ceil(Math.random() * 6);
console.log('resultado dado 1:', dado1);
let dado2 = Math.ceil(Math.random() * 6);

while (dado1 !== dado2) {
  dado2 = Math.ceil(Math.random() * 6);
  console.log('resultado dado 2:', dado2);
}



/* resultado dado 1: 3
resultado dado 2: 2
resultado dado 2: 6
resultado dado 2: 1
resultado dado 2: 6
resultado dado 2: 1
resultado dado 2: 6
resultado dado 2: 2
resultado dado 2: 4
resultado dado 2: 4
resultado dado 2: 2
resultado dado 2: 2
resultado dado 2: 6
resultado dado 2: 2
resultado dado 2: 6
resultado dado 2: 2
resultado dado 2: 6
resultado dado 2: 3



resultado dado 1: 4
resultado dado 2: 3
resultado dado 2: 2
resultado dado 2: 4 */