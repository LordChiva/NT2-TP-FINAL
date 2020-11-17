<template>

<div class="cargarDatos">

    <div class="usuario">
    
    <h1>
    Ingrese Usuario
    </h1>
    <input type="text" id="usuario"  >
    
</div>
<div class ="contraseña"> 
    <h1>Ingrese Contraseña</h1>
    <input type="text" id="usuario"  >
   
</div>
 <button @click="verificarUsuario()">Ingresar</button>
</div>

              
 </template>

 <script>
     
     export default 
{
     data ()  
     {
        return{
            usuarios:[
            {
                usuario:'admin',
                contraseña:'admin'
            },
            {
                usuario:'seba',
                contraseña:'pirulo' 
            }]
            
        }        
    },
    methods:
    {
             verificarUsuario()
        {
            var usuario =document.getElementById("usuario")
            console.log(usuario)
            if(usuario=='Carlos')
            {
                console.log("Buenas")
            }
            else
            {
                console.log("Chau")
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