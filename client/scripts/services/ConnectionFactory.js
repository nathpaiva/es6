var stores = ['negociacoes'];
var version = 4;
var dbName = 'aluraframe';

class ConnectionFactory {
  constructor() {
    throw new Error('Não pode criar uma instancia de ConnectionFactory');
  }
  static getConnection() {
    return new Promise((resolve, reject) => {
      let openRequest = window.indexedDB.open('aluraframe', 4);

      openRequest.onupgradeneeded = e => {
        ConnectionFactory._createConnection(e.target.result);
      };

      openRequest.onsuccess = e => {
        console.log('e.target.result', e.target.result);
        resolve(e.target.result);
      };

      openRequest.onerror = e => {
        console.error(e.target.error);
        reject(e.target.error.name);
      };
    });
  }

  static _createConnection(connection) {

    stores.forEach(store => {
      if (connection.objectStoreNames.contains(store)) {
        connection.deleteObjectStore(store);
      }

      connection.createObjectStore(store, {
        autoIncrement: true
      });
    });
  }
}
