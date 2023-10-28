const charlaDatos = JSON.parse(localStorage.getItem("charlaInfo"));
// const modal = document.querySelector('.modal-dialog');
console.log(charlaDatos);

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
      <h3>${this.titulo}</h3>
      <p>${this.descripción}</p>
      <div class="spanContainer">
        <span class="spanHour">${this.hora}</span>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="renderInfoModal(${this.id})">
          Registrarme
        </button>
      </div>
    </div>
    `;
    cont.appendChild(confSectionContainer);
  }
}
const renderInfoModal = (id) => {
  const modalInfo = charlaDatos.find(charla => charla.id === id);
  console.log(modalInfo);
  const modalTitle = document.querySelector(".modal-title");
  modalTitle.innerHTML = modalInfo.título;
  const modalfooter = document.querySelector(".modal-footer");
  const modalbody = document.querySelector(".modal-body");
  modalbody.innerHTML = `
    <p>${modalInfo.descripción}</p>
      <div class="oradorContainer">
      <h6>${modalInfo.orador}</h6>
    </div>
  `
  modalfooter.innerHTML = `
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
  `; 
  const btn = document.createElement("button"); 
  btn.classList= "btn btn-primary";
  btn.innerText= "Inscribirse";
  btn.type = "button"; 
  btn.addEventListener("click", () => agregarCharla(id))
  modalfooter.appendChild(btn); 
}
function agregarCharla (id){
  const user = JSON.parse(localStorage.getItem("user")) || null; 
  if(user  !== null && user?.usuarioValido){
     const charlas =  charlaDatos.charlas?.map(charla => {
      if(charla.id == parseInt(id)){
          charla.asistentes.push(user)
      }
        return charla; 
      } )
      alert("Registro Exitoso!"); 
      localStorage.setItem("charlaInfo" , JSON.stringify(charlas)); 
  }else{
    alert("Debe Registrarse para inscribirse!");
  }

}

// const renderInfoModal = (id) => {
//   // console.log(typeof charlaDatos);
//   let modalDialog = document.querySelector('main');
//   const modalInfo = charlaDatos.find(charla => charla.id === id);
//   // console.log(modalInfo);
//   const contenidoModal = document.createElement("div")
//   contenidoModal.id = (`modal`);
//   contenidoModal.classList.add("modal", "fade");
//   contenidoModal.setAttribute("tabindex", "-1")
//   contenidoModal.setAttribute("aria-hidden", "true")
//   contenidoModal.innerHTML = `
//   <div class="modal-dialog">
//   <div class="modal-content">
//   <div class="modal-header">
//     <h1 class="modal-title fs-5" id="exampleModalLabel">${modalInfo.título}</h1>
//     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//   </div>
//   <div class="modal-body">
    
//   </div>
//   <div class="modal-footer">
//     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//     <button type="button" class="btn btn-primary">Save changes</button>
//   </div>
//   </div>
//   </div>

//    `
//     modalDialog.appendChild(contenidoModal);
// }

