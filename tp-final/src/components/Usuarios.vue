<template>
    <div class="cargarDatos">
        <div class="usuario">
            <h1>Ingrese Usuario</h1>
            <input type="text" v-model="usuarioCargado" id="usuario"  >
        </div>
        <div class ="contraseña"> 
            <h1>Ingrese Contraseña</h1>
            <input type="text" v-model="contraseñaCargada" id="contraseña"  >
        </div>
        <button @click="verificarUsuario(usuarioCargado,contraseñaCargada)" >Ingresar</button>
        <div v-if="this.error == false">
            <h3>Has introducido mal el usuario o la contraseña.</h3>
        </div>
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
            }                
        },
        mounted() {
            this.usuarios = this.consultandoMockApi(); 
        },
        methods: {
            verificarUsuario (usu,cont) {
                console.log(this.usuarios[1].usuario)
                for (var i =0;i<this.usuarios.length;i++) {                                         
                    if((this.usuarios[i].usuario == usu) && (this.usuarios[i].contrasenia == cont)) {                        
                        console.log(usu)
                        console.log("for "+this.usuarios[i].usuario)
                        this.$store.state.usuario=this.usuarios[i];           
                        this.$store.dispatch('agregarUsuario',this.usuarios[i]);
                        this.usuarios.length = i;
                        this.error = true;
                        this.$router.push('/');
                    } 
                    else {
                        console.log("No esta")
                        this.error = false;
                    }
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
        }
    }
</script>
 
<style>
 
</style>
