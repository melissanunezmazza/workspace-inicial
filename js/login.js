let formLog = document.getElementById('loginForm');

//addEventListener y funcion de validacion
formLog.addEventListener('submit', function(e){
    let Password = document.getElementById('password')
    let User = document.getElementById('User')

    let password = Password.value;
    let user =User.value;

    if (user.length && password.length >= 8) {
        e.preventDefault();
        localStorage.setItem("user", user); //guardado de dato de ususario ingresado, en el local storage
        window.location.href = 'inicio.html';
    } else if (!(user.length>=8)) {
        e.preventDefault();
        alert('Debe ingresar al menos 8 caracteres');
    } else if (!(password.length >= 8)) {
        e.preventDefault();
        alert('Debe ingresar al menos 8 caracteres');
    }
}
)

