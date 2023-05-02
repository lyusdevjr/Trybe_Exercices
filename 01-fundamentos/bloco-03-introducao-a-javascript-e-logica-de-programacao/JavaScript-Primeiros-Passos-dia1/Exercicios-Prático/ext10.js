let custo=(3000.2) + 300;
let venda=400;
let unidades=1000;

if(custo <= 0 || venda <= 0){
  console.log("Não é possivel calcular o lucro se o valor de custo ou venda for 0")
}
else{
  let lucro = (vendaunidades) - (custo*unidades);
  console.log("O lucro foi de :" + lucro);
}