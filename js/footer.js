const footer = document.querySelector("footer");

const myFooter = () => {
  const user = JSON.parse(localStorage.getItem("userLog")) || undefined;
  return (footer.innerHTML = `
  <section class="container-fluid footer col-12 pt-2 px-5 m-0 text-white">
        <div class="container d-flex justify-content-between flex-column flex-sm-row text-center">
            <div class="logo">
                <a href="index.html">
                    <img src="../assets/logo2.png" class="img-fluid" alt="Logo de página" width="150" height="130">
                </a>

            </div>

            <div class="contacto">
                <h2>Contacto</h2>
                <div class="d-flex flex-column">
                    <a class="linksFooter">Sobre Nosotros</a>
                    <a class="linksFooter" onclick='window.location.href="./html/error404.html"'>Soporte</a>
                    <a class="linksFooter" id="botonPolitica">Política de Privacidad</a>
                    <a class="linksFooter" id="botonTerminos">Términos y Condiciones</a>
                </div>
            </div>

            <div class="lugar">
                <h2>Nuestro Lugar</h2>
                <p class="m-0">General Paz 576</p>
                <p class="m-0">Tucumán 4000</p>
                <p class="m-0">T: (381) 578 3030</p>
                <p class="m-0">rollingcode@gmail.com</p>
            </div>

            <div class="redes">
                <h2>Síguenos</h2>
                <div class="red-social">
                    <a href="https://es-la.facebook.com/" target="_blank"><i
                            class="bi bi-facebook redes-sociales"></i></a>
                    <a href="https://www.instagram.com/" target="_blank"><i
                            class="bi bi-instagram redes-sociales"></i></a>
                    <a href="https://github.com/" target="_blank"><i class="bi bi-github redes-sociales"></i></a>
                </div>
            </div>
        </div>

        <hr class="border border-light">

        <div class="container-fluid text-center">
            <div>&copy; 2023 <b>Display: Center, <a class="linksFooter" href="https://rollingcodeschool.com/">Rolling
                        Code</a> - Todos los Derechos Reservados.</b>
            </div>
        </div>
    </section>`
);
};

export default myFooter;
