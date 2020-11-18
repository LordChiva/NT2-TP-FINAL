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
             verificarUsuario (usu,cont)
        {
            if(usu=='admin' && cont =='admin')
            {
                console.log("Bienvenido Admin")
            }
            else
            {
                if(usu=='seba' && cont=='pirulo' )
            {
                console.log("Buenas "+usu)
            }
            else
            {
                console.log("Usuario incorrecto")
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