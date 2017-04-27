class NegociacaoController {
  adiciona(event) {
    event.preventDefault();

    let $ = document.querySelector.bind(document);
    let inputData = $('#data');
    let inputQnt = $('#quantidade');
    let inputPrice = $('#valor');
    console.log('inputData', inputData);
    console.log('inputQnt', inputQnt);
    console.log('inputPrice', inputPrice);
  }
}
