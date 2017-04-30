class HelperNegociacao {

  constructor() {
    throw Error('Esse metodo não pode ser instanciado');
  }

  static converteParaData(txt) {
    if (!/\d{4}-\d{2}-\d{2}/.test(txt)) throw Error('Deve estar no formato aaaa-mm-dd');
    return new Date(...txt.split('-').map((num, i) => num - i % 2));
  }

  static formatDate(data) {
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }
}
