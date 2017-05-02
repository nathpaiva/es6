class NegociacoesService {

  constructor() {
    this._http = new HttpService();
  }

  getNegociacoesSemana() {
    return new Promise((resolve, reject) => {
      this._http.get('negociacoes/semana')
        .then((data) => {
          resolve(data.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
        })
        .catch(() => {
          reject('Não foi possível obter as negociações da semana.');
          console.error(xhr.responseText);
        });
    });
  }

  getNegociacoesSemanaPassada() {
    return new Promise((resolve, reject) => {
      this._http.get('negociacoes/anterior')
        .then((data) => {
          resolve(data.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
        })
        .catch(() => {
          reject('Não foi possível obter as negociações da semana passada.');
          console.error(xhr.responseText);
        });
    });
  }

  getNegociacoesSemanaRetrasada() {
    return new Promise((resolve, reject) => {
      this._http.get('negociacoes/retrasada')
        .then((data) => {
          resolve(data.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
        })
        .catch(() => {
          reject('Não foi possível obter as negociações da semana retrasada.');
          console.error(xhr.responseText);
        });
    });
  }
}
