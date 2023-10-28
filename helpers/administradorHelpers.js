import {event, users,rolUser } from '../helpers/helpDB.js'; 
import { deleteChildNode } from '../service/serviceAdministrador.js';
const events = JSON.parse(localStorage.getItem("listEvents")) || event; 
const user = JSON.parse(localStorage.getItem("listaUsuarios"))  || users; 
function TitlePpal (text) {
    const title = document.createElement("h3"); 
    title.innerText = `Administador de ${text}`; 
    title.classList = "text-center"
    return title; 
}

function createTable(titles, id){
    const container = document.createElement("article"); 
    container.classList = "row my-4 d-flex justify-content-center table-responsive mx-1"; 
    const table = document.createElement("table"); 
    table.classList = "text-center table table-hover"; 
    const thead = document.createElement("thead"); 
    for (let index = 0; index < titles.length; index++) {
        const element = titles[index];
        const th = document.createElement("th"); 
        th.scope = "col"; 
        th.innerText = element; 
        thead.appendChild(th); 
    }
    table.appendChild(thead); 
    const tbody = document.createElement("tbody"); 
    tbody.id = `${id}`; 
    table.appendChild(tbody); 
    container.appendChild(table); 
    return container;
}
function loadEvents(bodyTable){
    events?.forEach(event => {
        if(event.estado){
            let row = document.createElement('tr');

            let column = document.createElement("td");
            column.setAttribute('scope', 'row');
            column.innerText = event.id;
            row.appendChild(column);

            column = document.createElement("td");
            column.innerText = event.imagen;
            row.appendChild(column);

            column = document.createElement("td");
            column.innerText = event.título;
            row.appendChild(column);

            column = document.createElement("td");
            column.innerText = event.descripción;
            row.appendChild(column);

            column = document.createElement("td");
            column.innerText = event.hora;
            row.appendChild(column);

            column = document.createElement("td");
            column.innerText = event.orador;
            row.appendChild(column);

            column = document.createElement("td");
            column.innerText = event.asistentes.length;
            row.appendChild(column);

            column = document.createElement("td");
          
            let buttonDelete = document.createElement("button");
            buttonDelete.innerHTML = `<i class="bi bi-trash3-fill"></i>`;
            buttonDelete.className = 'btn btn-danger mx-1';
            buttonDelete.id = 'btnEliminarUsuario';
            buttonDelete.addEventListener('click', (event) => {
           let fila = event.target.parentNode.parentNode.parentNode,
                idEvent = fila.getElementsByTagName('td')[0].innerText;
                eliminarFila("event", idEvent, fila); 
            });
            column.appendChild(buttonDelete);
          
            row.appendChild(column);
            bodyTable.appendChild(row);
        }
    });
}
function loadUser(bodyTable) {
    deleteChildNode(bodyTable); 
    user?.forEach(u => {
        if(u.estado){
            let row = document.createElement('tr');

            let column = document.createElement("td");
            column.setAttribute('scope', 'row');
            column.innerText = u.id;
            row.appendChild(column);
          
            column = document.createElement("td");
            column.innerText = u.nombre;
            row.appendChild(column);
          
            column = document.createElement("td");
            column.innerText = u.email;
            row.appendChild(column);
          
          
            column = document.createElement("td");
            column.innerText = u.rol;
            row.appendChild(column);
          
          
            column = document.createElement("td");
          
            let buttonDelete = document.createElement("button");
            buttonDelete.innerHTML = `<i class="bi bi-trash3-fill"></i>`;
            buttonDelete.className = 'btn btn-danger mx-1';
            buttonDelete.id = 'btnEliminarUsuario';
            buttonDelete.addEventListener('click', (event) => {
           let fila = event.target.parentNode.parentNode.parentNode,
                idUser = fila.getElementsByTagName('td')[0].innerText;
                eliminarFila("user", idUser, fila); 
            });
            column.appendChild(buttonDelete);
          
            let buttonUpdate = document.createElement("button");
            buttonUpdate.innerHTML = `<i class="bi bi-pencil-square"></i>`;
            buttonUpdate.className = 'btn btn-warning ';
            buttonUpdate.id = 'btnModificarUsuario';
            buttonUpdate.addEventListener('click', (event) => {
              const fila = event.target.parentNode.parentNode.parentNode,
                idUsuario = fila.getElementsByTagName('td')[0].innerText,
                rolUsuario= fila.getElementsByTagName('td')[3].innerText; 
                localStorage.setItem("idUpdateUser", idUsuario); 
              rol(rolUsuario); 
            });
            buttonUpdate.setAttribute('data-bs-toggle', 'modal');
            buttonUpdate.setAttribute('data-bs-target', '#modalUser');
            column.appendChild(buttonUpdate);
          
            row.appendChild(column);
            bodyTable.appendChild(row);
        }

    });
}
function eliminarFila(tipe,id, file) {
    if (confirm(`¿Desea Eliminar el ${tipe} seleccionado?`)) {
        if(tipe == "user"){
            user.map(user => {
                if(user.id == parseInt(id)){
                    user.estado =false; 
                }
                return user; 
            });
            localStorage.setItem("listaUsuarios" , JSON.stringify(user)); 
        }else{
            events.map(event => {
                if(event.id == parseInt(id)){
                    event.estado =false; 
                }
                return event; 
            });
            localStorage.setItem("listEvents" , JSON.stringify(events)); 
        }
      file.remove();
      
    }
  }
  function rol(rol){
    const select = document.getElementById("selectRol"); 
    deleteChildNode(select); 
    let nuevaOpcion = null;
    nuevaOpcion = document.createElement("option");
    nuevaOpcion.text = "Seleccionar una opcion";
    nuevaOpcion.value = "";
    nuevaOpcion.disabled = true;
    select.appendChild(nuevaOpcion);
    for (let estado in rolUser) {
        if (rolUser[estado] === rol) {
            nuevaOpcion = document.createElement("option");
            nuevaOpcion.text = rolUser[estado];
            nuevaOpcion.value = rolUser[estado];
            nuevaOpcion.selected = true;
            select.appendChild(nuevaOpcion);
        } else {
            nuevaOpcion = document.createElement("option");
            nuevaOpcion.text = rolUser[estado];
            nuevaOpcion.value = rolUser[estado];
            select.appendChild(nuevaOpcion);
        }
    }
  }
  function modificar(rol, body){
    let idUser = localStorage.getItem("idUpdateUser"); 
    user.map(user => {
        if(user.id == parseInt(idUser)){
            user.rol =rol; 
        }
        return user; 
    });
    localStorage.setItem("listaUsuarios" , JSON.stringify(user)); 
    console.log(idUser, rol);
    loadUser(body); 
    return window.location.reload(); 
  }
export {
    TitlePpal,
    createTable,
    loadEvents,
    loadUser,
    modificar
}