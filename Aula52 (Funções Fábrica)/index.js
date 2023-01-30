function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(" "); //divide a string pelos espaços e transforma em um array
      this.nome = valor.shift(); //pega o primeiro indice guarda em this.nome e deleta
      this.sobrenome = valor.join(" ");
    },

    fala(assunto = "falando sobre JS") {
      return `${this.nome} está ${assunto}.`;
    },
    altura,
    peso,
    // Getter (transforma a funcao em um atributo)
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Luiz", "Otávio", 1.8, 80);
console.log(p1.imc);
const p2 = criaPessoa("Maria", "Antonia", 1.6, 42);
console.log(p2.imc);
console.log(p2.fala());
p1.nomeCompleto = "Pedro Henrique Figueiredo";
console.log(p1.nomeCompleto);
