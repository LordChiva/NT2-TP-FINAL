<template>

<div class="cargarDatos">

    <div class="usuario">
    
    <h1>
    Ingrese Usuario
    </h1>
    <input type="text" v-model="usuarioCargado" id="usuario"  >
    
</div>
<div class ="contraseña"> 
    <h1>Ingrese Contraseña</h1>
    <input type="text" v-model="contraseñaCargada" id="contraseña"  >
   
</div>
 <button @click="verificarUsuario(usuarioCargado,contraseñaCargada)">Ingresar</button>
</div>

              
 </template>

 <script>
     
     export default 
{
     data ()  
     {
        return{
            usuarioCargado:'',
            contraseñaCargada:'',
            usuarios:[
            {
                usuario:'admin',
                contraseña:'admin',
                vip: true
            },
            {
                usuario:'seba',
                contraseña:'pirulo',
                vip: true
            },
            {
                usuario:'vip',
                contraseña:'vip',
                vip: false
            },
            ],            
        }        
    },
    methods:
    {
             verificarUsuario (usu,cont) {
                 
                 for (var i =0;i<this.usuarios.length;i++) {                     
                    if((this.usuarios[i] = usu) && (this.usuarios[i] = cont)) {
                    this.$store.state.usuario=this.usuarios[i];           
                    this.$store.dispatch('arregarUsuario',this.usuarios[i]);
                    this.usuarios.length = i;
                } 
                }
        }
    }
}
    
        
 
 
      
 </script>
 
 <style>
 
 </style>

 <!--  CLASE 7
                    2:20:00 EN ADELANTE
                    COMO USAR EL ROUTE PARA TENER Y DIFERENCIAR
                    DIFERENTES USUARIOS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    
                    también pensaba en que si se puede usar de la manera en la que muestra en la clase,
                    hacer un slide con los diferentes usuarios pre-cargados. -->            