
const cartuserinfo = "https://japceibal.github.io/emercado-api/user_cart/25801.json"
//let inputSelected = document.querySelectorAll(`input.porcentaje`);
//console.log(inputSelected[1].value);
let radio1 = document.getElementById("flexRadioDefault");
let radio2 = document.getElementById("flexRadioDefault1");
let radio3 = document.getElementById("flexRadioDefault2");


//fetch para mostrar la informacion del carrito del usuario 25801:
fetch(cartuserinfo)
.then (r => r.json())
.then (cinfo =>{
    console.log(cinfo);
    //variable que guarda la informacion del articulo
     let articles = cinfo.articles;
     //varable que toma el elemento div de cart.html que va a ser contenedor
     let cartdata = document.getElementById("cartdata");
     //variable a usarse en la funcion local para calcular el subtotal
    let unitCost = articles[0].unitCost; 
    let res;

    //variables que usa la funcion manejarFormulario para insertar los datos calculados
    let costossubt = document.getElementById("costosubt")
    let costosenvio = document.getElementById("costoenvio")
    let costototal = document.getElementById("costototal")

    

    //funcion local que usa un addeventlistener en el input de la cantidad para calcular el subtotal e insertarlo en el elemnto de la tabla que va a contenerlo mas adelante.
    function manejarFormulario() {
      console.log(document.forms.form.flexRadioDefault.value);
      let valorradio = document.forms.form.flexRadioDefault.value
      let valorporcentaje = (res*valorradio)/100;
      let total = (valorporcentaje+res);
      console.log(valorporcentaje);
      console.log(total);
      costossubt.innerText=`${res}`
      costosenvio.innerText=`${valorporcentaje}`
      costototal.innerText=`${total}`

  }
    
    function eventoinput (){
      let subtotal = document.getElementById("subtotal");
      let inputS = document.getElementById("inputCountCart");
       inputS.addEventListener(`input`, e=>{
      res = unitCost*inputS.value;
      console.log(res); 
      radio1.addEventListener('change', manejarFormulario);
      radio2.addEventListener('change', manejarFormulario);
      radio3.addEventListener('change', manejarFormulario);
      subtotal.innerText= `${res}`
        manejarFormulario();
      });
      };



      //innerHTML que inserta en el div la tabla que contendrá la informacion del articulo
    cartdata.innerHTML+=`
    <br>
    <h2>Articulos a comprar</h2>
    <br>
    <table class="table" class="table table-hover">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Nombre</th>
      <th scope="col">Costo</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Subtotal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src="${articles[0].image}" width="60"></th>
      <td>${articles[0].name}</td>
      <td>${articles[0].currency}${articles[0].unitCost}</td>
      <td><input id="inputCountCart" type="number" value="1"></td>
      <td id="subtotal">${articles[0].unitCost}</td>
    </tr>
  </tbody>
</table>
<br>
    `;

    //llamado a la funcion que va a calcular el subtotal una vez se use el input.
    
    eventoinput();
  
   

  //Validacion del formulario de cart:
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
        }, false)
      })
  })()
})


//variables para los radios del modal de tipo de pago
const radioTDC = document.getElementById("radiotarjetadecredito")
const radioTB = document.getElementById("radiotransferenciabancaria")

//variables para los input del modal que refieren a la tarjeta de credito
const datostarjeta = document.getElementById("cardNum")
const datostarjeta2 = document.getElementById("SegCode")
const datostarjeta3 = document.getElementById("fechadevenc")

//variables para el input del modal que refieren a transferencia bancaria
const datostransferencia = document.getElementById("cNum")

function deshabilitarMetodoDePago() {
  let formulariomod = document.forms.formulario.pago.value;
  console.log(formulariomod)

  if (formulariomod === 'tarjeta') {
      datostransferencia.disabled = true;
      datostarjeta.disabled = false;
      datostarjeta2.disabled = false;
      datostarjeta3.disabled = false;
  } else if (formulariomod === 'transferencia') {
      datostarjeta.disabled = true;
      datostarjeta2.disabled = true;
      datostarjeta3.disabled = true;
      datostransferencia.disabled = false;
  }
}

radioTDC.addEventListener(`input`, deshabilitarMetodoDePago);
radioTB.addEventListener(`input`, deshabilitarMetodoDePago);
