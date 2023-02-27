<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
       <a class="navbar-brand" href="/">Mi portafolio</a>
       <button
         class="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarNav"
         aria-controls="navbarNav"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarNav">
         <ul class="navbar-nav ml-auto">
           <li class="nav-item">
             <router-link to="/Semana2" class="nav-link">Semana 2</router-link>
           </li>
           <li class="nav-item">
             <router-link to="/Semana3" class="nav-link">Semana 3</router-link>
           </li>
           </ul>
       </div>
</nav>
    <div class="justify-text-container">
        <h1>EJEMPLO JAVASCRIPT</h1>
        <div class="mb-3">
            <h2>Agregar Frutas</h2>
            <input type="text" name="AddItem" id="AddItem" class="form-control">
            <button id="addItemButton" class="btn btn-success">Agregar</button>

        </div>
        <div class="mb-3">
            <button id="hideElements" class="btn btn-secondary">Ocultar</button>
        </div>
        <div class="mb-3" id="list">
            <div class="card">
            <ul id="listItems">
                <li>Pera</li>
                <li>Manzana</li>
                <li>Uva</li>
                <li>Fresa</li>
            </ul>
            </div>
        </div>
        <button id="removeItemButton" class="btn btn-secondary">Eliminar</button>
    </div>

</template>
<!--
<script src="./listaf"></script>

<script>
//motrar ocultar div
const hidebtn = document.querySelector('#hideElements')
const listDiv = document.querySelector('#list')

//constante para agregar elementos
const addItemInput = document.querySelector('#AddItem')
const addItemButton = document.querySelector('button#addItemButton')

//constante para eliminar elementos
const removeItem = document.querySelector('#removeItemButton')

//funcion para confirmar eliminar un item
function alerta(){
    var mensaje;
    var opcion = confirm ("Seguro que quieres eliminar este elemento permanente mente")
    if (opcion == true){
      items[index].parentNode.removeChild(items[index])}  
}

//agregar los eventos al boton ocultar/mostrar
hidebtn.addEventListener('click', () => {
    if(listDiv.style.display == 'none'){
        listDiv.style.display = 'block'
        hidebtn.textContent = 'Ocultar'
    } else {
        listDiv.style.display = 'none'
        hidebtn.textContent = 'Mostrar'
    }
})

//agregar elementos a la lista
addItemButton.addEventListener('click', () => {
    if(addItemInput.value === '' ){
        window.alert("NO puede quedar vacio el espacio")

    }else{
        let list = document.querySelector('ul')
        let li = document.createElement('li')
        li.textContent = addItemInput.value
        list.appendChild(li)
        window.alert("agregado correctamente")}
        document.getElementById("AddItem").value = ""
        addItemInput.focus();
})

//funcion para obtener el indice del elemento el la lista
var list = document.getElementById('listItems'),
    items = list.getElementsByTagName('li')

const findIndex = (element) => {
    var len = items.length
    for(var i=0; i<len; i++){
        if(items[i]===element){
            return i
        }
    }
}

list.onclick = (e) =>{
    let event = e || window.event
    src=event.target

    let myIndex = findIndex(src)
    index = myIndex
    list.querySelectorAll('li').forEach(el=>el.classList.
        remove('alert','alert-danger'))
    items[myIndex].classList.add('alert','alert-danger')
    document.getElementById("AddItem").value = ""
}

removeItem.addEventListener('click', () =>{
    //items[index].parentNode.removeChild(items[index])
    alerta()
})
</script>
-->