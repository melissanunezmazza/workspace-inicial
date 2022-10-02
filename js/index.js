document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});
//proceso para insertar el dato guardado en el local storage del usuario en la barra de navegacion.
let userData = document.getElementById("userData");

//menu desplegable del div que contiene el usuario en la navBar: Edit: DesMenu crea el menu deslegable tomado de bootstrap.
let DesMenu = document.createElement("div")
DesMenu.innerHTML += `
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> ${ localStorage.getItem("user")}
  </a>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="cart.html">Mi carrito</a></li>
    <li><a class="dropdown-item" href="mi-profile.html">Mi perfil</a></li>
    <li><a class="dropdown-item" href="login.html" id="logout">Cerrar Sesion</a></li>
  </ul>
</div>`
userData.appendChild(DesMenu)
//addEventListener que elimina el dato de usuario del localStorage cuando se clickea en la opcion Cerrar Sesion del menú desplegable.
let eraseUser = document.getElementById("logout")
eraseUser.addEventListener("click", function(){
    localStorage.removeItem("user")
})