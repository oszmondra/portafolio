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
             <router-link to="/main" class="nav-link">Perfil</router-link>
           </li>
           <li class="nav-item">
             <router-link to="/BarradeCarga" class="nav-link">Tarea</router-link>
           </li>
           </ul>
       </div>
    </nav>

    <div class="container-fluid">

<h2>Barra de Carga</h2>
<h4>Crear barra de progreso que se actualiza cada 1 segundo</h4>
</div>
<div>
    <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div v-if="progress === 100" class="alert alert-success" role="alert">
          ¡Carga completa!
        </div>
        <div class="d-flex justify-content-center my-5">
          <button class="btn btn-primary" @click="startLoading">Cargar</button>
        </div>
        <div class="progress my-3">
          <div class="progress-bar" :style="{ width: progress + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0,
    };
  },
  methods: {
    startLoading() {
      let interval = setInterval(() => {
        this.progress += 10;
        if (this.progress === 100) {
          clearInterval(interval);
        }
      }, 1000);
    },
  },
};
</script>

    

  