const formulario = document.getElementById('formulario');
const adminLogueado = JSON.parse(localStorage.getItem('adminLogueado')) || false;
const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado')) || false;

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


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('correo').value;
    const password = document.getElementById('password').value;

    if (email === "administrador@administrador.com" && password === "administrador") {
        const usuarioValidado = {
            email: email,
            password: password, 
            usuarioValido: true
        }
        localStorage.setItem("user",  JSON.stringify(usuarioValidado))
        localStorage.setItem('adminLogueado', true);
        Swal.fire({
            toast: true,
            icon: "success",
            color: "white",
            background: "green",
            title: "Bienvenido!",
            position: "bottom-start",
            showConfirmButton: false,
            timer: 3000,
        });
        let interval = setInterval(() => {
            window.location.href = '../index.html'
        }, 2000)
        return;
    }

    if (email === "speaker@speaker.com" && password === "speaker") {
        localStorage.setItem('speakerLogueado', true);
        Swal.fire({
            toast: true,
            icon: "success",
            color: "white",
            background: "green",
            title: "Bienvenido!",
            position: "bottom-start",
            showConfirmButton: false,
            timer: 3000,
        });
        let interval = setInterval(() => {
            window.location.href = '../index.html'
        }, 2000)
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem('listaUsuarios')) || [];

    const usuarioValido = usuarios.find(usuario => usuario.email === email && usuario.password === password);

    if (!usuarioValido) {
        Swal.fire({
            toast: true,
            icon: "error",
            color: "white",
            background: "red",
            title: "El e-mail y/o contraseña ingresado son invalidas!",
            position: "bottom-start",
            showConfirmButton: false,
            timer: 3000,
        });
        return;
    }
    const usuarioValidado = {
        ...usuarioValido, 
        usuarioValido: true
    }
    localStorage.setItem("user",  JSON.stringify(usuarioValidado))
    localStorage.setItem('usuarioLogueado', JSON.stringify('usuarioValido'));
    Swal.fire({
        toast: true,
        icon: "success",
        color: "white",
        background: "green",
        title: "Bienvenido",
        position: "bottom-start",
        showConfirmButton: false,
        timer: 3000,
    });
    let interval = setInterval(() => {
        window.location.href = '../index.html'
    }, 2000)
})
