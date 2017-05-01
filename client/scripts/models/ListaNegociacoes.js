class ListaNegociacoes {

  constructor() {
    this._negociacoes = [];
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
  }

  cleanNegotiations() {
    this._negociacoes = [];
  }

  get negociacao() {
    return [].concat(this._negociacoes);
  }
}
