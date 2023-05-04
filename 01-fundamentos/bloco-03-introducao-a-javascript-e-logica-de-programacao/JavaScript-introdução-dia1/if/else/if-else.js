// if - se
// else - senão

// !      if (condicao) {
// !condicao

// *    } else if (outraCondicao) {
//*outra condicao

// TODO } else if (outraCondicao) {
// TODO outra condicao

// ?  } else {
// ?se nenhuma condicao for atendida
// ?}

let trybe = 19.40;

if (trybe >= 14 && trybe < 14.4) {
  console.log("Esquenta");

} else if (trybe >= 16.3 && trybe < 17.5) {
  console.log("Aula ao vivo");

} else if (trybe >= 19.4 && trybe < 20) {
  console.log("Fechamento");

} else {
  console.log("Fora dos momentos síncronos")
}
