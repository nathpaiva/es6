class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQnt = $('#quantidade');
    this._inputPrice = $('#valor');
  }

  adiciona(event) {
    event.preventDefault();

    let data = new Date(...this._inputData.value.split('-').map((num, i) => num - i % 2));
    let negociacao = new Negociacao(data, this._inputQnt.value, this._inputPrice.value);

  }
}
