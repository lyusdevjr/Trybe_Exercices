let xadrez = "EguA"

switch  (xadrez.toLowerCase()) {
  case 'torre':
  console.log("Anda para todos lados que seja em linha reta")
  break

  case 'bispo':
    console.log("Anda para todos os lados que seja diagonal")
  break

  case 'peao':
    console.log("Anda 2 casa para frente inicio do jogo e após anda 1 casa")
  break

  case 'cavalo':
    console.log("Anda em L sendo 3 casas para frente e uma casa lateral a escolha")
  break

  case 'rainha':
    console.log("Anda para todos os lados do tabuleiro sem limite")
  break

  case 'rei':
    console.log("Anda 1 casa para qualquer lado do tabuleiro")
  break 

  default:
    console.log("Peça não encontrada no tabuleiro")
}