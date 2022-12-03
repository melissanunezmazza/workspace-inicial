//variable que toma el elemento imput que va a contener el email del usuario
let emailuser = document.getElementById("validationCustommail");

 //variables que van a tomar los elementos inout del formulario que ingresa el usuario en el perfil.
        let nameuser = document.getElementById("nameuser");
        let secondnameuser = document.getElementById("secondnameuser");
        let surnameuser = document.getElementById("surnameuser");
        let secondssurnameuser = document.getElementById("ssecondsurnameser");
        let teluser = document.getElementById("teluser");

        //variables para los value de los input
       



//funcion que toma el email que se ingresa al iniciar sesion y lo coloca como valor del input del email.
(function setemailinprofile (){
    let useremail = localStorage.getItem(`user`);
    if (useremail !=null){
        emailuser.value = useremail;
    }
    checkLS();
})();

function checkLS (){
    let uname = localStorage.getItem(`name`);
    if (uname !=null){
        nameuser.value = uname;
    }
    let sname = localStorage.getItem(`secondname`);
    if (sname !=null){
        secondnameuser.value = sname;
    }
    let surn = localStorage.getItem(`surname`);
    if (surn !=null){
        surnameuser.value = surn;
    }
    let secsurn = localStorage.getItem(`secondsurname`);
    if (secsurn !=null){
        secondssurnameuser.value = secsurn;
    }
    let tel = localStorage.getItem(`telephone`);
    if (tel !=null){
        teluser.value = tel;
    }
}

(function setitems (){
    let formprof = document.getElementById("formprofile");
    formprof.addEventListener('submit', function(e){
         let nameu = nameuser.value;
        let snameu = secondnameuser.value;
        let surnameu = surnameuser.value;
        let secsurnu = secondssurnameuser.value;
        let telU = teluser.value;
        if (nameu!=null) {
            e.preventDefault();
            localStorage.setItem("name", nameu);}
            if (snameu!=null) {
                e.preventDefault();
                localStorage.setItem("secondname", snameu); }
                if (surnameu!=null) {
                    e.preventDefault();
                    localStorage.setItem("surname", surnameu); }
                    if (secsurnu!=null) {
                        e.preventDefault();
                        localStorage.setItem("secondsurname", secsurnu); }
                        if (telU!=null) {
                            e.preventDefault();
                            localStorage.setItem("telephone", telU); }
        }
) } )();

  

//validacion del formulario con bootstrap
(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
          let formprof = document.getElementById("formprofile");
    formprof.addEventListener('submit', function(e){
        if (nameu!=null) {
            e.preventDefault();
            localStorage.setItem("name", nameu);}})
        }, false)
      })
  })();

  

