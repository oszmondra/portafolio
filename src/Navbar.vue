<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
    <a class="navbar-brand" href="http://localhost:5173/">Mi portafolio</a>
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
          <router-link to="/" class="nav-link">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/introduccion" class="nav-link">Introducción</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contenidos" class="nav-link">Contenidos</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/jornalizacion" class="nav-link">Jornalización</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/calendarizacion" class="nav-link">Calendarización</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/apuntes" class="nav-link">Apuntes</router-link>
        </li>
        <!--<li class="nav-item">
          <router-link to="/guias" class="nav-link">Guias de Laboratorio</router-link>
        </li>-->
        <!--<li class="nav-item">
          <router-link to="/casos" class="nav-link">Casos de estudio</router-link>
        </li> -->
        <li class="nav-item">
          <router-link to="/tareas" class="nav-link">Tareas</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/calificaciones" class="nav-link">Calificaciones</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/main" class="nav-link">Proyecto</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>