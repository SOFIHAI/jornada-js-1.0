

const header = document.querySelector("header");

const navbar = () => {
  const user = JSON.parse(localStorage.getItem("userLog")) || undefined;
  return (header.innerHTML = `
  <nav class="navbar navbar-total navbar-expand-lg bg-body-dark navbar-dark">
  <div class="container-fluid">
    <img src="../assets/logo2.png" class="logo-navbar"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
  
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
                 <a class="nav-link active text-white" aria-current="page" href="../index.html">Inicio</a>
              </li>
                ${
                  user
                    ? `
                    <li class="nav-item">
                      <a class="nav-link text-white" href="../index.html">${user.userName}</a>
                    </li>`
                    : `
                    <li class="nav-item">
                      <a class="nav-link text-white" href="../pages/login.html">Iniciar Sesión</a>
                    </li>
                `
                }
                ${
                  user
                    ? ""
                    : `
                  <li class="nav-item">
                    <a class="nav-link text-white" href="../pages/register.html">Regístrate</a>
                  </li>
                `
                }
                ${
                  user?.role === "ADMIN"
                    ? `
                    <li class="nav-item">
                      <a class="nav-link text-white" href="../pages/administrador.html">Panel de Admin.</a>
                    </li>
                    `
                    : ""
                }
                ${
                  user?.role === "USER"
                    ? `
                    <li class="nav-item">
                      <a class="nav-link text-white" href="../index.html"></a>
                    </li>
                    `
                    : ""
                }
                ${
                  user
                    ? `
                    <li class="nav-item">
                      <button class="btn text-white justify-content-md-end" id='closeSession' onclick='localStorage.clear(), window.location.reload()'>Cerrar Sesión</button>
                    </li>
                    `
                    : ""
                }
     </ul>
        
    </div>
  </div>
</nav>
`);
 };


export default navbar;
