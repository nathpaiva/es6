class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQnt = $('#quantidade');
    this._inputPrice = $('#valor');
    this._ListaNegociacoes = new ListaNegociacoes();

    this._NegociacaoView = new NegociacaoView($('#negociacaoTabela'));
    this._NegociacaoView.update(this._ListaNegociacoes);

    this._mensage = new Mensage();
    this._mensagemView = new MensagemView($('#mensagemView'));
    this._mensagemView.update(this._mensage);
  }

  adiciona(event) {
    event.preventDefault();

    this._ListaNegociacoes.adiciona(this._createNegociacao());
    this._NegociacaoView.update(this._ListaNegociacoes);
    this._mensage.text = 'Negociacao adicionada com sucesso';
    this._mensagemView.update(this._mensage);
    this._clearForm();
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
