const footer = document.querySelector("footer");

const myFooter = () => {
  const user = JSON.parse(localStorage.getItem("userLog")) || undefined;
  return (footer.innerHTML = `<section class="container-fluid mt-5 footer bg-dark p-3">
  <div class="row justify-content-around" id="cuerpoFooter">
    <aside class="col-xl-3 col-sm-3 col-md-3">
      <p class="h5 text-white text-center">Rolling Conf</p>
      <ul>
        <li>General Paz 576</li>
        <li>Teléfono: + 381 5783030</li>
        <li>Email: rollingcodeschool@gmail.com</li>
      </ul>
    </aside>
   
    <aside class="col-xl-3 col-sm-3 col-md-3 aside-footer">
      <p class="h5 text-white text-center">Legal</p>
      <ul>
        <li><a href="#">Términos y condiciones</a></li>
        <li><a href="#">Política de privacidad</a></li>
        
      </ul>
    </aside>
    <aside class="col-xl-3 col-sm-3 col-md-3">
      <p class="h5 text-white text-center">Redes Sociales</p>
      <ul>
        <li>
        <a href="https://www.facebook.com/RollingCodeSchool/?locale=es_LA" class="img-redessociales"><i class="fa-brands fa-square-facebook"></i>
      </a>
        </li>
        <a href="https://www.youtube.com/watch?v=FIK49iC1EwE&t=2s" class="img-redessociales"><i class="fa-brands fa-youtube"></i></a>
        <li>

        <a href="https://www.instagram.com/rollingcodeschool/" class="img-redessociales"><i class="fa-brands fa-instagram"></i></a>
        </li>
      </ul>
    </aside>
  </div>
  <div class="row text-white" id="copyrightFooter">
    <p class="h6 text-center">&copy; 2023 Todos los derechos reservados.</p>
  </div>
</section>`);
};

export default myFooter;
