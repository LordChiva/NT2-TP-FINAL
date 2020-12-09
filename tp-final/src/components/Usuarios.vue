<template>
    <div class="cargarDatos">
        <div class="signIn">
            <h3>Ingrese Usuario</h3>
            <!-- <input type="text" v-model="usuarioCargado" id="usuario"> -->
            <!-- <b-form-input v-model="text" placeholder="Enter your name"></b-form-input> -->
            <b-form-input v-model="usuarioCargado" type="text" debounce="500" id="usuario"></b-form-input>
        <!-- </div> -->
        <!-- <div class ="contraseña">  -->
            <h3>Ingrese Contraseña</h3>
            <!-- <input type="password" v-model="contraseñaCargada" id="contraseña"><button id="ojo" @click="mostrarContrasena()"><i class="fas fa-eye"></i></button> -->
            <b-form-input v-model="contraseñaCargada" type="password" debounce="500" id="contraseña"></b-form-input>
            <b-button class="reveal" @click="mostrarContrasena()"><i class="fas fa-eye"></i></b-button>
            <!-- <i class="fas fa-eye-slash"></i> -->
        </div>
        <br>
        <div class="error" v-if="this.error == false">
            <h3>Has introducido un usuario o contraseña invalidos.</h3>
        </div>
        <b-input-group-append class="contenedorB">
            <b-button class="boton" @click="verificarUsuario(usuarioCargado,contraseñaCargada)">Ingresar</b-button>
            <b-button class="boton"><router-link to="/CrearUsuario">Crear Usuario</router-link></b-button>
        </b-input-group-append>
        
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

<style scoped>
.cargarDatos {
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 10px 0px 10px;
}

.signIn {
    display: inline-block;
    width: 50%;
    padding: 10px 0px 10px;
    text-align: center;
    align-items: center;
}

.signIn > h3{
    font-size: 30px;
    color: #9FADBD;
    text-align: center;
}

.error > h3{
    font-size: 25px;
    color: #9FADBD;
    text-align: center;
}

.form-control {
    display: inline-block;
    width: 50%;
}

.reveal {
    border: 1px solid rgba(159, 173, 189, 0.7);
    border-radius: 10px;
    margin: 0px 0px 1px 5px;
    color: #152232;
    background-color: rgb(159, 173, 189);
    font-weight: bold;
}

a {
    color: #9FADBD;
    text-decoration: none;
}

a :hover {
    text-decoration: none;
}

#nav a {
    font-weight: bold;
    color: #9FADBD;
    text-decoration: none;
}

.contenedorB{
    padding: 20px;
    display: inline-flex;
    justify-content: center;
}

.boton {
    padding: 5px;
    border: 1px solid rgba(21, 34, 50, 0.7);
    border-radius: 10px;
    margin: 0px 50px 0px 50px;
    width: 100px;
    color: #9FADBD;
    background-color: rgb(21, 34, 50, 0.3);
    font-weight: bold;
}

.boton :hover{ 
    color: #C7D5E5;
    background-color: none;
}
</style>