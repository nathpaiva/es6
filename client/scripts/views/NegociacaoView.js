class NegociacaoView extends View {

  constructor(elem) {
    super(elem);
  }

  template(model) {
    return `
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th onclick="negociacaoController.ordena('date')">DATA</th>
          <th onclick="negociacaoController.ordena('qnt')">QUANTIDADE</th>
          <th onclick="negociacaoController.ordena('price')">VALOR</th>
          <th onclick="negociacaoController.ordena('vol')">VOLUME</th>
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
}
