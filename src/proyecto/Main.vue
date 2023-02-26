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

 <div class="container bg-dark text-white border border-dark">
    </div>

      <div>
          <div class="sidebar-wrapper" >
              <div class="profile-container">
                  <img class="profile mx-auto d-block mt-5" src="./assets/images/perfil.jpeg" width="150" height="150"/>
                  <h1 class="name">Oscar René Mondragón</h1>
                  <h3 class="tagline">Ingeniero en Sistemas y Redes Informaticas (en curso)</h3>
                  <hr>
                  <h3 class="tagline"> <ul class="list-unstyled contact-list">
                      <li>oszmondra@gail.com</li>
                      <li>+503 7282 7009</li>
                      </ul></h3>
              </div>
              

              <div class="education-container container-block">
                  <h2 class="container-block-title">Educación</h2>
                  <div class="item">
                      <h5 class="meta">Educación Basica de 2007 a 2016 (Complejo Educativo Ofelia Herrera, Tecnologico Cristiano Prof. Gonzales Carrasco, Centro Escolar Unión Panamericana, otras...)</h5>
                  </div>
                  <div class="item">
                      <h5 class="meta">Bachillerato en  Instituto Nacional Isidro Menéndez de 2017 a 2018 (Bachillerato general)
                      </h5>
                  </div>
                  <div class="item">
                    <h5 class="meta">Ingeniería en Sistemas y Redes Informáticas en la Universidad Gerardo Barrios (2019-2023...)

                    </h5>
                </div>
              </div>             
          </div>
          
          <div class="main-wrapper">
              
              <section class="section summary-section">
                  <h2 class="section-title">Información Personal</h2>
                  <div>
                     <li>14/12/2001</li>
                     <li>DUI: 06311648-8</li>
                     <li>NIT: 1217-141201-108-7</li>
                     <li>Soltero</li>
                  </div>
              </section>

              <section class="section summary-section">
                <h2 class="section-title">Intereses</h2>
                <div>
                   <li>Estudios</li>
                   <li>Tecnologia</li>
                   <li>Matematica</li>
                   <li>Lectura</li>
                </div>
            </section>
          
            <section class="section summary-section">
              <h2 class="section-title">Referencias</h2>
              <div>
                 <li>Gerardo Nuñez 6009-0596 (Propitario "Funeraria La Bendición”)</li>
                 <li>René Humberto Molina 7879-0892 (Representante legal "HCA S.A. de C.V.")</li>
                 <li>Cristian Aguilar 7764-5950 (Representante legal "Flores de Guatemala")</li>
                 <li>Hada Jisela Orellana 7839-5976</li>
              </div>
          </section>

          <section class="section summary-section">
            <h2 class="section-title">Experiencia Laboral</h2>
            <div>
               <li>Tutor Escolar</li>
               <li>Asistente Administrativo HCA S.A. de C.V.</li>
               <li>Venta y bodega "Flores de Guatemala"</li>
               <li>Ensablaje y pintura "Funeraria la Bendición"</li>
               <li>Ventas "TecnoCEL"</li>
               <li>Atención al Cliente (CHIVO WALLET) "TWO SHOW PRODUCTION S.A. de C.V."</li>
            </div>
        </section>

        <section class="section summary-section">
          <h2 class="section-title">Habilidades</h2>
          <div>
             <li>Eficiencia</li>
             <li>Manejo de las matemáticas</li>
             <li>Proactivo</li>
             <li>Conocimientos en TIC</li>
             <li>Manejo de herramientas de Office</li>
             <li>Manejo de Photoshop</li>
             <li>Ventas</li>
             <li>Atención al cliente</li>
             <li>Solucion de problemas</li>
          </div>
      </section>             
          </div>
      </div>
   
      <footer class="footer">
      </footer>
</template> 
