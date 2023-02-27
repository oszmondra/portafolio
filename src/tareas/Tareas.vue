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
    <div class="container-fluid">
        <h2 class="text-center font-weight-bold">Tareas</h2>
           <img src="../assets/img/estudiantechan.gif" alt="Unu" class="mx-auto d-block mt-5" width="900" height="400" > 
        </div>
</template>