let formLog = document.getElementById('loginForm');

formLog.addEventListener('submit', function(e){
    let Password = document.getElementById('password')
    let User = document.getElementById('User')

    let password = Password.value;
    let user =User.value;

    if (user.length && password.length >= 8) {
        e.preventDefault();
        window.location.href = 'my-profile.html';
    } else if (!(user.length>=8)) {
        e.preventDefault();
        alert('Debe ingresar al menos 8 caracteres');
    } else if (!(password.length >= 8)) {
        e.preventDefault();
        alert('Debe ingresar al menos 8 caracteres');
    }
}
)  
