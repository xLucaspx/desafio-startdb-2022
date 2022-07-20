class Forca {

  constructor(palavra) {
    this.palavraSecreta = palavra.toLowerCase(); //para garantir que o jogo não será case sensitive
    this.caracteres = this.palavraSecreta.split("");
    this.acertos = [];
    this.letrasChutadas = [];
    this.vidas = 6;
    this.palavra = this.mostraTracos(this.palavraSecreta); //array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
  }

  chutar(letra) { }

  buscarEstado() { return ""; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: [], // Deve conter todas as letras chutadas
          vidas: 6, // Quantidade de vidas restantes
          palavra: [] // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
