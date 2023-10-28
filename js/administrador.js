import {TitlePpal , createTable, loadEvents, loadUser, modificar} from '../helpers/administradorHelpers.js'; 
import {bodyUser, bodyEvent } from '../helpers/helpDB.js'; 
import navbar from "./navBar.js";
import myFooter from "./footer.js";
const location = window.location.pathname; 


document.addEventListener("DOMContentLoaded", () => {
  navbar();
});

document.addEventListener("DOMContentLoaded", () => {
  myFooter();
}); 

if(location.includes("administrador.html")){
    const containerEvent = document.querySelector(".container-administrador"); 
    containerEvent.appendChild(TitlePpal("Eventos")); 
    containerEvent.appendChild(createTable(bodyEvent, "TbodyEvents")); 
    const tbody = document.getElementById("TbodyEvents"); 
    loadEvents(tbody); 
}else {
    const containerUser = document.querySelector(".container-administrador-user");
    containerUser.appendChild(TitlePpal("Usuarios")); 
    containerUser.appendChild(createTable(bodyUser, "TbodyUser")); 
    const tbody = document.getElementById("TbodyUser"); 
    loadUser(tbody);     
    const btnUpdate = document.getElementById("btnUpdateUser"); 
    const selectInfo = document.getElementById("selectRol");
    btnUpdate.addEventListener("click", () => modificar(selectInfo.value,tbody))
}