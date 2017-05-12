var ConnectionFactory = (function() {
  const stores = ['negociacoes'],
    version = 4,
    dbName = 'aluraframe';

  var connection = null,
    close = null;

  return class ConnectionFactory {
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
          if (!connection) {
            connection = e.target.result;
            close = connection.close.bind(connection);
            // Ou não faz o bind e chama no close
            // Reflect.apply(close, connection, []);
            connection.close = function() {
              throw new Error('Não pode fechar a connection');
            }

          }
          resolve(connection);
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

    static closeConnection() {
      if (connection) {
        close();
        connection = null;
      }
    }
  }
})();
