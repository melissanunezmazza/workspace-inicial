//variable para almacenar el dato tomado del local storage
const ident = localStorage.getItem("catID")
//variable a usar en el fetch con la url y la variable anterior concatenada.
const CARS101URL = "https://japceibal.github.io/emercado-api/cats_products/"+ident+".json";

//funcion que guarda la id de cada producto en local storage, y redirecciona a product-info.html
function setID(id) {
    localStorage.setItem("ID", id);
    window.location = "product-info.html"}

//fetch para filter
fetch(CARS101URL)
.then(response => response.json())
.then (datos => {
    console.log(datos.products)
    
    function filtrar() { //la funcion devuelve los datos completos si no se aplican filtros, y si se aplican devuelve el array ya filtrado.
    let pfilter = datos.products.filter(products => (products.cost >= document.getElementById("rFilterCountMin").value )&&( products.cost <= document.getElementById("rFilterCountMax").value)||(products.cost >= document.getElementById("rFilterCountMin").value )||( products.cost <= document.getElementById("rFilterCountMax").value));
    console.log(pfilter);
    let divcars = document.getElementById(`prodCar`);
    divcars.innerHTML = "";
    for (let dato of pfilter) {
        let cid = 0;
        console.log(datos); 
    divcars.innerHTML += `
    <div class="row">
            <div class="btn-group btn-group-toggle mb-4" data-bs-toggle="buttons">
                <div id="ProductLst" onclick="setID(${dato.id})"class="list-group-item list-group-item-action  cursor-active"
                    <h4 id="Name">${dato.name}</h4>
                    <img id="Img" src=${dato.image}></img>
                    <small id="SC">${dato.soldCount} Vendidos</small>
                    <p id="Desc">${dato.description}</p>
                    <p id="Cost">${dato.cost}${dato.currency}</p>
                </div>
            </div>
        </div>
    </div>
     `
    
    }

};

function clearfilter(){ //funcion para limpiar los filtros
    document.getElementById("rFilterCountMin").value = 0;//valores por defecto tras limpiar los filtros
    document.getElementById("rFilterCountMax").value = 200000000;
    filtrar();
};
clearfilter(); //llamado a las funciones al ocurrir el evento mencionado en el addEventListener
document.getElementById("clearRange").addEventListener('click', () => { clearfilter();}); 
document.getElementById("rFilterCount").addEventListener('click', () => { filtrar()}); 



});

//fetch para sort (ordenar), usando otro fetch aparte
fetch(CARS101URL)
.then(r => r.json())
.then (d =>{
    let listPr = d.products;
    function insert(){//funcion que inserta el json dentro del html con el formato deseado (igual al filtrado)
        let divListP = document.getElementById("prodCar")
        divListP.innerHTML =``
    for (let dato of listPr) {
        console.log(listPr); 
        divListP.innerHTML += `
        <div id="ProductLst"
        <div class="row">
            <div class="btn-group btn-group-toggle mb-4" data-bs-toggle="buttons">
                <div id="ProductLst" onclick="setID(${dato.id})"class="list-group-item list-group-item-action  cursor-active" 
                    <h4 id="Name">${dato.name}</h4>
                    <img id="Img" src=${dato.image}></img>
                    <small id="SC">${dato.soldCount} Vendidos</small>
                    <p id="Desc">${dato.description}</p>
                    <p id="Cost">${dato.cost}${dato.currency}</p>
                </div>
            </div>
        </div>
    </div>
    </div>
     `


    }
 }
 
 //a partir de aqui, el sort que define el orden dependiendo de los botones asignados para ello, al final llamando a la funcion insert para devolver el arry ordenado.
    let orA = document.getElementById("sortA");
    let orD = document.getElementById("sortD");
    let RelDesc = document.getElementById("sortRel");
    //orden ascendente por precio
     orA.addEventListener("click", event => {
        listPr.sort(function (a, b) {
            if (a.cost < b.cost) return -1;
            if (a.cost > b.cost) return 1;
            return 0;
        });
        insert();
    });
    //orden descendente por precio
    orD.addEventListener("click", event => {
        listPr.sort(function (a, b) {
            if (a.cost > b.cost) return -1;
            if (a.cost < b.cost) return 1;
            return 0;
        });
        insert();
    });
    //orden por reelevancia descendente (cantidad de ventas) 
    RelDesc.addEventListener("click", event => {
        listPr.sort(function (a, b) {
            if (a.soldCount < b.soldCount) return 1;
            if (a.soldCount > b.soldCount) return -1;
            return 0;
        });
        insert();
    });
 
})




//fetch para  la search bar (desafiate 2) (aún en desarrollo)
/*fetch(CARS101URL)
.then(resp => resp.json())
.then (d => {
    let datasearch = dat.products;
    function ins(){
        let divS = document.getElementById("prodCar")
        divS.innerHTML =``
    for (let dato of datasearch) {
        console.log(datasearch); 
        divS.innerHTML += `
    <h4 id="CarName">${dato.name}</h4>
    <img id="CarImg" src=${dato.image}></img>
    <small id="CarSC">${dato.soldCount} Vendidos</small>
    <p id="CarDesc">${dato.description}</p>
    <p id="CarCost">${dato.cost}${dato.currency}</p>
     `
    }
    let listPr = d.products;
    function insert(){
        let divListP = document.getElementById("prodCar")
        divListP.innerHTML =``
    for (let dato of listPr) {
        console.log(listPr); 
        divListP.innerHTML += `
    <h4 id="CarName">${dato.name}</h4>
    <img id="CarImg" src=${dato.image}></img>
    <small id="CarSC">${dato.soldCount} Vendidos</small>
    <p id="CarDesc">${dato.description}</p>
    <p id="CarCost">${dato.cost}${dato.currency}</p>
     `
    }
    let inputsearch = document.getElementById("searchbar");
    let nwlst=[];
    let prlst=[];
    function fB(e) {
        if (inputsearch.value) {
            nwlst = prlst.filter(item => {
                let itemUpperCase = item.name.toUpperCase()
                return itemUpperCase.includes(inputsearch.value.toUpperCase());
            })
            prlst = nwlst
            insert();
        } else {
            prlst = datos.products
            insert();
        }
        inputsearch.addEventListener("´input", fB)

        insert();  
        let inputsubmit = document.getElementById("searchbutton")
        inputsubmit.addEventListener("click", fB)
        insert();

    }
    
}})*/