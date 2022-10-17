
const cartuserinfo = "https://japceibal.github.io/emercado-api/user_cart/25801.json"
let val;
/*function eventSubt(){
  let count = document.getElementById("inputCountCart")
  val = count.value;
}*/

//fetch para mostrar la informacion del carrito del usuario 25801:
fetch(cartuserinfo)
.then (r => r.json())
.then (cinfo =>{
    console.log(cinfo)
    //variable que guarda la informacion del articulo
     let articles = cinfo.articles;
     //varable que toma el elemento div de cart.html que va a ser contenedor
     let cartdata = document.getElementById("cartdata")
     //variable a usarse en la funcion local para calcular el subtotal
    let unitCost = articles[0].unitCost; 

    //funcion local que usa un addeventlistener en el input de la cantidad para calcular el subtotal e insertarlo en el elemnto de la tabla que va a contenerlo mas adelante.

    function eventoinput (){
      let subtotal = document.getElementById("subtotal");
      let inputS = document.getElementById("inputCountCart")
       inputS.addEventListener(`input`, e=>{
      let res = unitCost*inputS.value;
      subtotal.innerText= `${res}`
      })
      }

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
      <td id="subtotal"></td>
    </tr>
  </tbody>
</table>
<br>
    `

    //llamado a la funcion que va a calcular el subtotal una vez se use el input.
  eventoinput();
  
})


//variable que toma el elemento div del cart.html
let divSI = document.getElementById("cartSendInf")
//variable que crea otro elemento div en el anterior que contendrá los siguientes elementos:
let divSendInfo = document.createElement("div")
//elementos html creados para el formulario de envio.
divSendInfo.innerHTML+=`
<h2> Tipo de envío</h2>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    Premium 2 a 5 días (15%)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Express 5 a 8 días (7%)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Standard 12 a 15 días (5%)
  </label>
</div>
<br>
<h2>Direccion de envio</h2>
<form class="row g-3">
  <div class="col-md-6">
    <label for="inputSt" class="form-label">Calle</label>
    <input type="text" class="form-control" id="inputSt">
  </div>
  <div class="col-md-6">
    <label for="inputN" class="form-label">Número</label>
    <input type="text" class="form-control" id="inputN">
  </div>
  <div class="col-12">
    <label for="inputE" class="form-label">Esquina</label>
    <input type="text" class="form-control" id="inputE">
  </div>
  </form>
`
//appendchild que inserta el segundo div en el que ya existe en html
divSI.appendChild(divSendInfo)