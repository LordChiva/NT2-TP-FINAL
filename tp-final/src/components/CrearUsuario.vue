<template>
    <div class="cargarDatos">
        <div class="usuario">
            <h1>Ingrese Usuario</h1>
            <input type="text" v-model="usuarioCargado" id="usuario"  >
        </div>
        <div class ="contraseña"> 
            <h1>Ingrese Contraseña</h1>
            <input type="password" v-model="contraseñaCargada" id="contraseña" ><button id="ojo" @click="mostrarContrasena()"><i class="fas fa-eye"></i></button>
        </div>
         <div class ="nombre"> 
            <h1>Ingrese Nombre</h1>
            <input type="text" v-model="nombreCargado" id="nombre"  >
        </div>
         <div class ="apellido"> 
            <h1>Ingrese Apellido</h1>
            <input type="text" v-model="apellidoCargado" id="apellido"  >
        </div>
        <div v-if="this.error == false">
            <h3>Has introducido un usuario o contraseña invalidos.</h3>
        </div>
        <b-button class="boton"><router-link to="/Usuarios">Volver</router-link></b-button>
        <b-button class="boton" @click="verificarUsuario(usuarioCargado,contraseñaCargada)">Confirmar</b-button>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data ()  {
            return{
                usuarioCargado:'',
                contraseñaCargada:'',
                nombreCargado:'',
                apellidoCargado:'',
                usuarios:[],
                error: null,
                valorEncontrado:false,
            }                
        },
        mounted() {
            this.usuarios = this.consultandoMockApi(); 
        },
        methods: {
            verificarUsuario (usu,cont) {
                console.log(this.usuarios[1].usuario)
                var i=0;
                console.log(" Y aca")
                while ( (i<this.usuarios.length)&&(this.valorEncontrado==false)) {
                    if((usu=='')&&(cont=='')) {                        
                        this.valorEncontrado=true;
                        this.error = false; 
                    } else {
                        if((this.usuarios[i].usuario == usu) && (this.usuarios[i].contrasenia == cont)) {      
                            this.valorEncontrado=true;
                            this.error = false;
                        } else {
                            i++
                        }
                    }                     
                }
                if((this.valorEncontrado==false)) {
                    this.cargarUsuario()
                }
            },
            async cargarUsuario() {
                try {
                    const un = {usuario:this.usuarioCargado,contrasenia:this.contraseñaCargada,vip:false,
                    nombre:this.nombreCargado, apellido:this.apellidoCargado}
                    const res = await axios.post('https://5fbc46e9c09c200016d4192c.mockapi.io/Usuarios',un);
                    console.log(res.data)
                    this.$router.push('/Usuarios');
                } catch (error) {
                    alert("Error")
                }                
            },
            consultandoMockApi() {
                axios.get('https://5fbc46e9c09c200016d4192c.mockapi.io/Usuarios')
                .then((response)=> {
                    const respuesta = response.data
                    this.usuarios=respuesta
                    console.log(this.usuarios)
                })
            },
            mostrarContrasena(){
                var tipo = document.getElementById("contraseña");
                if(tipo.type == "password"){
                    tipo.type = "text";
                }else{
                    tipo.type = "password";
                }
            },
        }
    }
</script>