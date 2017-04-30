class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQnt = $('#quantidade');
    this._inputPrice = $('#valor');
    this._ListaNegociacoes = new ListaNegociacoes();

    this._NegociacaoView = new NegociacaoView($('#negociacaoTabela'));

    this._NegociacaoView.update(this._ListaNegociacoes);
  }

  adiciona(event) {
    event.preventDefault();

    this._ListaNegociacoes.adiciona(this._createNegociacao());
    this._clearForm();
    this._NegociacaoView.update(this._ListaNegociacoes);
  }

  _createNegociacao() {
    return new Negociacao(HelperNegociacao.converteParaData(this._inputData.value), this._inputQnt.value, this._inputPrice.value);
  }

  _clearForm() {
    this._inputData.value = '';
    this._inputPrice.value = 0;
    this._inputQnt.value = 1;

    this._inputData.focus();
  }
}
