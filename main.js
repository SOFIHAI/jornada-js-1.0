import dataConf from "./db.json" assert {type:'json'};
import myFooter from "./js/footer.js";
import navbar from "./js/navBar.js";

localStorage.setItem("charlaInfo", JSON.stringify(dataConf.charlas));


document.addEventListener("DOMContentLoaded", () => {
  navbar();
});

document.addEventListener("DOMContentLoaded", () => {
  myFooter();
});

// console.log(dataConf.charlas);

//Variables 
const infoConfContainer = document.querySelector('.infoConfContainer');
let charlas = [];

//Instancias
const loadInfoSection = () => {
  charlas = [];
  dataConf.charlas.forEach(element => {
    charlas.push(new RenderConfSection(element.id, element.imagen, element.orador, element.título, element.hora, element.descripción))
  });
}

loadInfoSection();

// console.log(charlas);

const renderInfoSection = () => {
  charlas.forEach(charla => {
    charla.render(infoConfContainer)
  })
}

renderInfoSection();

