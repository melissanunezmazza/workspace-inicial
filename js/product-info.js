const idn = localStorage.getItem("ID")
const ProductInfoURL = "https://japceibal.github.io/emercado-api/products/"+idn+".json"
const ProductComents = "https://japceibal.github.io/emercado-api/products_comments/"+idn+".json"
let divcom = document.getElementById("ComCont") //variable global para tomar el div que contendrá los comentarios
let ProdRel = document.getElementById("prodRel")

function setIDIMG(id) {
    localStorage.setItem("ID", id);
    window.location = "product-info.html"}

//fetch que inserta en html los datos de cada producto
fetch(ProductInfoURL)
.then (response => response.json())
.then (d =>{
//console.log(d)

let prodInfo = document.getElementById("prodInfo")
prodInfo.innerHTML += `
<div class="container"  id="Pname">${d.name}</h2>
    <p class="mb-1">Precio:</p>
    <p class="mb-1">${d.currency} ${d.cost}</p>
    <p class="mb-1">Descripcion:</p>
    <p class="mb-1" id="Pdesc">${d.description}</p>
    <p class="mb-1">Categoria:</p>
    <p. class="mb-1">${d.category}</p.>
    <p class="mb-1">Cantidad de vendidos:</p>
    <p class="mb-1">${d.soldCount}</p>
    <p class="mb-1">Imagenes ilustrativas:</p>
</div>
<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${d.images[0]}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${d.images[1]}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${d.images[2]}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${d.images[3]}" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
variante o
`



})


//fetch que inserta los comentarios desde la api
fetch(ProductComents)
.then (r => r.json())
.then (comments =>{
   // console.log(comments)
   
    for (let comment of comments){
        divcom.innerHTML+=`
        <div class="container">
            <div class="row">
                <div class="col text-end">
                    <div class="btn-group btn-group-toggle mb-4" data-bs-toggle="buttons">
                        <div id="user">${comment.user} - ${comment.dateTime}</div>
                            <span class="fa fa-star ${ comment.score >= 1 ? "checked" : "no-checked"}"></span>
                            <span class="fa fa-star ${ comment.score >= 2 ? "checked" : "no-checked"}"></span>
                            <span class="fa fa-star ${ comment.score >= 3 ? "checked" : "no-checked"}"></span>
                            <span class="fa fa-star ${ comment.score >= 4 ? "checked" : "no-checked"}"></span>
                            <span class="fa fa-star ${ comment.score >= 5 ? "checked" : "no-checked"}"></span>
                        <div id="contComment">${comment.description}</div>
                    </div>
                </div>
            </div>
        </div>
        `
    
    }
   //push para añadir al array el comentario realizado por el usuario
    comments.push(send)
   // console.log (comments)
})

// de aqui en adelante, add event listener encargado de capturar la infromacion que ingresa el usuario e insertarla en el html
 let send = document.getElementById("send");
 
 send.addEventListener("click", e=>{
    let utext = document.getElementById("comment")
    let ustar = document.getElementById("star")
    e.preventDefault(); //el inner incluye, usuario (tomado del local storage que se guarda en login), puntuacion y descripcion
    divcom.innerHTML += `
    <div class="container">
            <div class="row">
                <div class="col text-end">
                    <div class="btn-group btn-group-toggle mb-4" data-bs-toggle="buttons">
                        <div id="user">${localStorage.getItem("user")}</div>
                            <span class="fa fa-star ${ ustar.value >= 1 ? "checked" : "no-checked"}"></span>
                            <span class="fa fa-star ${ ustar.value >= 2 ? "checked" : "no-checked"}"></span>
                            <span class="fa fa-star ${ ustar.value >= 3 ? "checked" : "no-checked"}"></span>
                            <span class="fa fa-star ${ ustar.value >= 4 ? "checked" : "no-checked"}"></span>
                            <span class="fa fa-star ${ ustar.value >= 5 ? "checked" : "no-checked"}"></span>
                        <div id="contComment">${utext.value}</div>
                    </div>
                </div>
            </div>
        </div>
        `

    
 })

//fetch para insertar los elementos relacionados:

fetch(ProductInfoURL)
.then (response => response.json())
.then (d =>{
let nR = d.relatedProducts
console.log(nR)
//let id
let divPR = document.createElement("div")
for (let prodREL of nR) {
    console.log(prodREL.name)
    //id = nR.id
    divPR.innerHTML +=  `
    
    <div class="btn-group btn-group-toggle mb-4" data-bs-toggle="buttons">
    <div id="ProductLst" onclick="setIDIMG(${prodREL.id})"class="list-group-item list-group-item-action  cursor-active"
    <h4>${prodREL.name}</h4>
    <img src="${prodREL.image}">
    `
    ProdRel.appendChild(divPR);
}


})
