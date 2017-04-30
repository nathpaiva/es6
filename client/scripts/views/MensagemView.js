class MensagemView extends View {

  constructor(elem) {
    super(elem);
  }

  template(model) {
    return model.text ? `<p class="alert alert-info">${model.text}</p>` : `<p></p>`;
  }
}
