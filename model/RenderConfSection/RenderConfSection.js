class RenderConfSection {
  constructor(id, imagen, orador, titulo, hora, descripción) {
    this.id = id;
    this.img = imagen;
    this.orador = orador;
    this.titulo = titulo;
    this.hora = hora;
    this.descripción = descripción;
  }
  render(cont) {
    let confSectionContainer = document.createElement("div");
    confSectionContainer.className = "cardConfContainer";
    confSectionContainer.innerHTML = `
    <div class="imgOradorContainer">
      <img src=${this.img} alt=imagen de ${this.orador} class="imgOrador">
      <h4>${this.orador}</h4>
    </div>
    <div class="confInfo">
      <p>${this.descripción}</p>
      <div class="spanContainer">
        <span class="spanHour">${this.hora}</span>
      </div>
    </div>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="${this.id}">
      Launch demo modal
    </button>
    `;
    cont.appendChild(confSectionContainer);
  }
  renderModal(cont, id) {
    let modalContainer = document.createElement("div");
    modalContainer.className = "modalContainer";
    modalContainer.innerHTML = `
    <div class="modal fade" id=${id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">${id}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
      <div class="modal-body">
      ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
    </div>
    </div>
    `;
    cont.appendChild(modalContainer);
  }
}
