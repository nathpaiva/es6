class Mensage {

  constructor(updateMessage, text = '') {
    this._text = text;
    this._updateMessage = updateMessage;
  }

  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this._updateMessage(this);
  }
}
