class ListaNegociacoes {

  constructor(upDateListaNegociacao) {
    this._negociacoes = [];
    this._upDateListaNegociacao = upDateListaNegociacao;
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
    this._upDateListaNegociacao(this);
  }

  cleanNegotiations() {
    this._negociacoes = [];
    this._upDateListaNegociacao(this);
  }

  get negociacao() {
    return [].concat(this._negociacoes);
  }
}
