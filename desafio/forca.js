class Forca {

  constructor(palavra) {
    this.palavraSecreta = palavra.toLowerCase(); //para garantir que o jogo não será case sensitive
    this.caracteres = this.palavraSecreta.split("");
    this.acertos = [];
    this.letrasChutadas = [];
    this.vidas = 6;
    this.palavra = this.mostraTracos(this.palavraSecreta); //array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
  }

  chutar(letra) {
    if (/[a-zA-Z]/.test(letra) && letra.length == 1) { //garantindo que o chute só será aceito caso seja apenas uma letra (regra 3)
      const chute = letra.toLowerCase();
      const letrasChutadas = this.letrasChutadas;

      for (let i = 0; i < letrasChutadas.length; i++) {
        if (chute == letrasChutadas[i]) return;
      }

      letrasChutadas.push(chute); // 5. Toda chamada ao método chutar deve registrar a letra em letrasChutadas

      this.palavra = this.mostraLetraCorreta(chute); // regra 7 OK.

      const caracteres = this.caracteres;

      if (caracteres.indexOf(chute) < 0) this.vidas -= 1; // regra 6 OK.
    }
  }

  buscarEstado() {  // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
    const vidas = this.vidas;
    if (vidas <= 0) return "perdeu";

    const acertos = this.acertos;
    const caracteres = this.caracteres;
    if (acertos.length >= caracteres.length) return "ganhou";

    return "aguardando chute";
  }

  buscarDadosDoJogo() {
    const letrasChutadas = this.letrasChutadas;
    const vidas = this.vidas;
    const palavra = this.palavra;

    return {
      letrasChutadas,
      vidas,
      palavra
    }
  }

  mostraTracos(palavra) {
    const arrPalavra = palavra.split("");

    arrPalavra.forEach((caractere) => {
      const index = arrPalavra.indexOf(caractere);

      if (index != -1) arrPalavra[index] = "_";
    });

    return arrPalavra;
  }

  mostraLetraCorreta(letra) {
    const caracteres = this.caracteres;
    const tracos = this.palavra;

    for (let i = 0; i < caracteres.length; i++) {
      if (letra == caracteres[i]) {
        tracos[i] = letra;
        this.acertos.push(letra);
      }
    }
    return tracos
  }
}

module.exports = Forca;
