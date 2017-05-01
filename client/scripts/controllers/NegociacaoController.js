class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQnt = $('#quantidade');
    this._inputPrice = $('#valor');

    this._ListaNegociacoes = ProxyService.create(new ListaNegociacoes(), ['adiciona', 'cleanNegotiations'], model => this._NegociacaoView.update(model));
    // this._ListaNegociacoes = new ListaNegociacoes(model => this._NegociacaoView.update(model));
    this._NegociacaoView = new NegociacaoView($('#negociacaoTabela'));
    this._NegociacaoView.update(this._ListaNegociacoes);

    this._mensage = ProxyService.create(new Mensage(), ['text'], model => this._mensagemView.update(model));
    // this._mensage = new Mensage(model => this._mensagemView.update(model));
    this._mensagemView = new MensagemView($('#mensagemView'));
    this._mensagemView.update(this._mensage);
  }

  adiciona(event) {
    event.preventDefault();

    this._ListaNegociacoes.adiciona(this._createNegociacao());
    // this._NegociacaoView.update(this._ListaNegociacoes);
    this._mensage.text = 'Negociacao adicionada com sucesso';
    // this._mensagemView.update(this._mensage);
    this._clearForm();
  }

  cleanNegotiations() {
    this._ListaNegociacoes.cleanNegotiations();
    // this._NegociacaoView.update(this._ListaNegociacoes);
    this._mensage.text = 'Negociacao foram apagadas com sucesso';
    // this._mensagemView.update(this._mensage);
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
