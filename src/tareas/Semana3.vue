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
             <router-link to="/Tareas" class="nav-link">Semana 1</router-link>
           </li>
           <li class="nav-item">
             <router-link to="/Semana2" class="nav-link">Semana 2</router-link>
           </li>
           <li class="nav-item">
             <router-link to="/Semana3" class="nav-link">Semana 3</router-link>
           </li>
           </ul>
       </div>
    </nav>
</template>
 <!--
    <div id="app">
        {{title}}
        <p>{{name}}</p>
        cambiar nombre
        <input type="text" v-model="newName" @input="changename">
        <button type="button" v-on:click="changename">cambiar</button>
    </div>
</template>
<script src="https://unpkg.com/vue@3/dist/vue.global.js">
    const app = Vue.createApp({
        data(){
            return {
                title: 'Programación Computacional IV',
                name: 'Jose Flores',
                newName: '',
            }
        },
        methods:{
            changename(){
                this.name = this.newName
            }
        }
    }).mount('#app')
</script>
-->
