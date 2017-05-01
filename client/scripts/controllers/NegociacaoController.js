class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQnt = $('#quantidade');
    this._inputPrice = $('#valor');

    let that = this;

    this._ListaNegociacoes = new Proxy(new ListaNegociacoes(), {
      get(target, prop, recive) {
        if (['adiciona', 'cleanNegotiations'].includes(prop) && typeof(target[prop]) === typeof(Function)) {
          return function() {
            Reflect.apply(target[prop], target, arguments);
            that._NegociacaoView.update(target);
          }
        }
        return Reflect.get(target, prop, recive);
      }
    });
    // this._ListaNegociacoes = new ListaNegociacoes(model => this._NegociacaoView.update(model));
    this._NegociacaoView = new NegociacaoView($('#negociacaoTabela'));
    this._NegociacaoView.update(this._ListaNegociacoes);

    this._mensage = new Mensage(model => this._mensagemView.update(model));
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
