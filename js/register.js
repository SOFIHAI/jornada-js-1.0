const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const adminLogueado = JSON.parse(localStorage.getItem('adminLogueado')) || false;
const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado')) || false;

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
	nombre: false,
	password: false,
	correo: false
}

if (adminLogueado) {
    Swal.fire({
        toast: true,
        icon: "error",
        color: "white",
        background: "red",
        title: "Ya iniciaste sesión!",
        position: "bottom-start",
        showConfirmButton: false,
        timer: 3000,
    });
    let interval = setInterval(() => {
        window.location.href = '../index.html'
    }, 2000)
}

if (usuarioLogueado == 'usuarioValido') {
    Swal.fire({
        toast: true,
        icon: "error",
        color: "white",
        background: "red",
        title: "Ya iniciaste sesión",
        position: "bottom-start",
        showConfirmButton: false,
        timer: 3000,
    });
    let interval = setInterval(() => {
        window.location.href = '../index.html'
    }, 2000)
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
			break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
			break;
		case "password2":
			validarPassword2();
			break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
			break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if (inputPassword1.value !== inputPassword2.value) {
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	const nombre = document.getElementById('nombre').value;
	const email = document.getElementById('correo').value;
	const password = document.getElementById('password').value;

	const usuarios = JSON.parse(localStorage.getItem('listaUsuarios')) || [];
	const emailRegistrado = usuarios.find(usuario => usuario.email === email);
	if (emailRegistrado) {
        Swal.fire({
            toast: true,
            icon: "error",
            color: "white",
            background: "red",
            title: "El email ya se encuentra registrado!",
            position: "bottom-start",
            showConfirmButton: false,
            timer: 3000,
        });
		return;
	}

	const terminos = document.getElementById('terminos');
	if (campos.nombre && campos.password && campos.correo && terminos.checked) {
		formulario.reset();

		usuarios.push({ nombre: nombre, email: email, password: password });
		localStorage.setItem('listaUsuarios', JSON.stringify(usuarios));

		Swal.fire({
            toast: true,
            icon: "success",
            color: "white",
            background: "green",
            title: "Registro exitoso!",
            position: "bottom-start",
            showConfirmButton: false,
            timer: 3000,
        });
		let interval = setInterval(() => {
			window.location.href = '../index.html'
		}, 2000)

	} else {
        Swal.fire({
            toast: true,
            icon: "error",
            color: "white",
            background: "red",
            title: "Rellena el fomulario correctamente!",
            position: "bottom-start",
            showConfirmButton: false,
            timer: 3000,
        });
	}
});
