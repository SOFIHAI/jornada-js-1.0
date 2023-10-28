const adminLogueado = JSON.parse(localStorage.getItem('adminLogueado')) || false;
const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado')) || false;
const speakerLogueado = JSON.parse(localStorage.getItem('speakerLogueado')) || false;

const header = document.querySelector("header");

const navbar = () => {
  const user = JSON.parse(localStorage.getItem("userLog")) || undefined;
  return (header.innerHTML = `
  

<header class="sticky-top">
        <nav class="navbar navbar-expand-md px-3" id="navBarPrincipal">
            <div class="container-fluid d-flex">

                <a class="d-flex justify-content-center pt-2" href="index.html">
                    <img src="../assets/logo2.png" alt="logoRolling" width="150" height="60">
                </a>

                <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="bi bi-list"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        ${adminLogueado || usuarioLogueado || speakerLogueado
      ? ""
      : `
                        <li class="nav-item mx-3 my-3" id="btnRegistrarse">
                          <a href="../pages/register.html" class="btn btn-danger w-100">Registrarse</a>
                        </li>
                                `
    }
                        ${adminLogueado || usuarioLogueado || speakerLogueado
      ? ""
      : `
                        <li class="nav-item mx-3 my-3" id="btnIniciarSesion">
                            <a href="../pages/login.html" class="btn btn-outline-light w-100">Iniciar sesión</a>
                        </li>
                                `
    }
                        ${adminLogueado
      ? `
                          <li class="nav-item mx-3 my-3">
                            <a href="../pages/administrador.html" class="btn btn-outline-light w-100">Panel admin</a>
                        </li>
                          `
      : ``
    }
                        ${speakerLogueado
      ? `
                          <li class="nav-item mx-3 my-3">
                            <button type="button" class="btn btn-outline-light w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Crear charla</button>
                        </li>
                          `
      : ``
    }
                        ${adminLogueado || usuarioLogueado || speakerLogueado
      ? `
                          <li class="nav-item mx-3 my-3">
                            <button class="btn btn-danger w-100" onclick='localStorage.removeItem("adminLogueado"), localStorage.removeItem("usuarioLogueado"), localStorage.removeItem("speakerLogueado") , window.location.reload()'>Salir</button>
                        </li>
                          `
      : ``
    }
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Ingresá una nueva charla</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
          <div class="mb-3">
            <label for="exampleInput" class="form-label">Titulo</label>
            <input type="text" class="form-control" id="exampleInput">
          </div>
          <div class="mb-3">
            <label for="exampleInput" class="form-label">Orador</label>
            <input type="text" class="form-control" id="exampleInput">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Descripción</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary">Crear</button>
          </div>
      </form>
    </div>
  </div>
</div>
`);
};

export default navbar;
