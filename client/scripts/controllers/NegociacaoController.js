class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQnt = $('#quantidade');
    this._inputPrice = $('#valor');

    this._ListaNegociacoes = new HelperBind(new ListaNegociacoes(), new NegociacaoView($('#negociacaoTabela')), 'adiciona', 'cleanNegotiations');

    this._mensage = new HelperBind(new Mensage(), new MensagemView($('#mensagemView')), 'text');
  }

  adiciona(event) {
    event.preventDefault();

    this._ListaNegociacoes.adiciona(this._createNegociacao());
    this._mensage.text = 'Negociacao adicionada com sucesso';
    this._clearForm();
  }

  importNegotiations() {

    let service = new NegociacoesService();
    Promise.all([service.getNegociacoesSemana(), service.getNegociacoesSemanaPassada(), service.getNegociacoesSemanaRetrasada()])
      .then((data) => {
        data.reduce((atach, negociation) => atach.concat(negociation), [])
          .forEach(negotiation => this._ListaNegociacoes.adiciona(negotiation));
        this._mensage.text = 'Negociações importadas com sucesso';
      })
      .catch(err => this._mensage.text = err);
  }

  cleanNegotiations() {
    this._ListaNegociacoes.cleanNegotiations();
    this._mensage.text = 'Negociacao foram apagadas com sucesso';
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
