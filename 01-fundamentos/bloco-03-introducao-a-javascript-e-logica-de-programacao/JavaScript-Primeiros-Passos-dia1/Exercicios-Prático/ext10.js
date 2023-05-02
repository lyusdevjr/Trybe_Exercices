let inss;
let ir;

let salarioBruto = 2500

if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08

} else if (salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.09

} else if (salarioBruto <= 5189.92) {
  inss = salarioBruto * 0.11;

} else {
  inss = 570.88
}

let basedoSalario = salarioBruto - inss;


if (basedoSalario <= 1903.98) {
  ir = 0;
} else if (basedoSalario <= 2826.65) {
  ir = (basedoSalario * 0.075) - 142.80;

} else if (basedoSalario <= 3751.05) {
  ir = (basedoSalario * 0.15) - 354.80;

} else if (basedoSalario <= 4664.68) {
  ir = (basedoSalario * 0.225) - 636.13;

} else {
  ir = (basedoSalario * 0.275) - 869.36;
};

console.log("Salário: " + (basedoSalario - ir));