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
        <div v-if="this.error == false">
            <h3>Has introducido un usuario o contraseña invalidos.</h3>
        </div>
        <button @click="verificarUsuario(usuarioCargado,contraseñaCargada)" >Ingresar</button>
        <b-button class="boton"><router-link to="/CrearUsuario">Crear Usuario</router-link></b-button>
        
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data ()  {
            return{
                usuarioCargado:'',
                contraseñaCargada:'',
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
                let i =0;
                this.valorEncontrado=false;                    
                while ( (i<this.usuarios.length)&&(this.valorEncontrado==false)) { 
                    if((this.usuarios[i].usuario == usu) && (this.usuarios[i].contrasenia == cont)) {                          
                        this.$store.state.usuario=this.usuarios[i];           
                        this.$store.dispatch('agregarUsuario',this.usuarios[i]);
                        this.usuarios.length = i;
                        this.error = true;
                        this.valorEncontrado=true;
                        this.$router.push('/');
                    } 
                    else {
                        i++;
                        this.error = false;
                    }
                }
            },            
            consultandoMockApi() {
                axios.get('https://5fbc46e9c09c200016d4192c.mockapi.io/Usuarios')
                .then((response)=> {
                    const respuesta = response.data
                    this.usuarios=respuesta
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