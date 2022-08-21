//const CARS101URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";

fetch(`https://japceibal.github.io/emercado-api/cats_products/101.json`)
.then(response => response.json())
.then (datos => {
    //console.log(datos);
    let divcars = document.getElementById(`prodCar`);

    for (let dato of datos.products) {
        console.log(datos); 
    divcars.innerHTML += `
    <h4 id="CarName">${dato.name}</h4>
    <img id="CarImg" src=${dato.image}></img>
    <small id="CarSC">${dato.soldCount} Vendidos</small>
    <p id="CarDesc">${dato.description}</p>
    <p id="CarCost">${dato.cost}${dato.currency}</p>
     `

    }
})