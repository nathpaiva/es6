class NegociacaoView {

  constructor(elem) {
    this._elem = elem;
  }

  _template(model) {
    return `
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
          <th>VOLUME</th>
        </tr>
      </thead>

      <tbody>
      ${model.negociacao.map(n =>`
          <tr>
            <td>${HelperNegociacao.formatDate(n.date)}</td>
            <td>${n.quantity}</td>
            <td>${n.price}</td>
            <td>${n.volume}</td>
          </tr>
        `).join('')}
      </tbody>

      <tfoot>
        <tr>
          <td colspan="3">
          </td>
          <td>
            ${model.negociacao.reduce((total, n) => total += n.volume, 0)}
          </td>
        </tr>
      </tfoot>
    </table>
    `
  }

  update(model) {
    this._elem.innerHTML = this._template(model);
  }
}
