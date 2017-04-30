class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQnt = $('#quantidade');
    this._inputPrice = $('#valor');
    this._ListaNegociacoes = new ListaNegociacoes();
  }

  adiciona(event) {
    event.preventDefault();

    this._ListaNegociacoes.adiciona(this._createNegociacao());
    this._clearForm();
    console.log('this._ListaNegociacoes.negociacao', this._ListaNegociacoes.negociacao);
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
