import dataConf from "./db.json" assert {type:'json'};
import myFooter from "./js/footer.js";
import navbar from "./js/navBar.js";


document.addEventListener("DOMContentLoaded", () => {
  navbar();
});

document.addEventListener("DOMContentLoaded", () => {
  myFooter();
});

console.log("Hola mundo");

console.log(dataConf.charlas);

//Variables 
const infoConfContainer = document.querySelector('.infoConfContainer');
const modalContainer = document.querySelector('.modalContainer');
let charlas = [];

//Instancias
const loadInfoSection = () => {
  charlas = [];
  dataConf.charlas.forEach(element => {
    charlas.push(new RenderConfSection(element.id, element.imagen, element.orador, element.título, element.hora, element.descripción))
  });
}

loadInfoSection();

console.log(charlas);

const renderInfoSection = () => {
  charlas.splice(charlas.length-3).forEach(charla => {
    charla.render(infoConfContainer)
  })
}

renderInfoSection();

const renderModal = () => {
  charlas.forEach(charla => {
    charla.renderModal(modalContainer, charla.id)
  })
}

document.querySelector("#btn-talks").addEventListener("click", () => {
  getCharlas().then((respuesta) => {
    console.log(respuesta);
  });
});


