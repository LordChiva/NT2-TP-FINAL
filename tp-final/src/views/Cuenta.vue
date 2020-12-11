<template>
  <div class="cuenta">
    <div class="login">
      <div class="noUser" v-if="usuario == null ">
        <h3>No has ingresado un Usuario</h3>
        <b-input-group-append class="contenedorB">
          <b-button class="boton"><router-link to="/Usuarios">Login/Registro</router-link></b-button>
        </b-input-group-append>
      </div>

      <div class="background">
        <h3>Cuenta</h3>
        <div class="user" v-if="usuario != null">
          <h5>Usuario: {{usuario.usuario}}</h5>
          <div class="userH5" v-if="this.usuario.vip == true">
            <h5>Es Vip</h5>
          </div>
          <h5>Nombre: {{usuario.nombre}}</h5>
          <h5>Apellido: {{usuario.apellido}}</h5>
          <h5>Cantidad de Peliculas Vistas: {{cantPelisVistas}}</h5>
        </div>   
      </div>

      <div class="admin" v-if="usuario.usuario == 'admin'"> 
        <div class="backgroundAdmin">
          <table class="tablaReservas">
            <h3>Reservas</h3>
            <tr v-for="(reserva,r) in reservas" :key="'reserva'+r">
              <td class="userH5">
                <h5>Usuario: {{reserva.Usuario}}</h5>
                <h5>Pelicula: {{reserva.Pelicula}}</h5>	
                <h5>Dia: {{reserva.Dia}} {{reserva.fecha}}</h5>
                <h5>Horario: {{reserva.Horario}}</h5>
                <h5>Butacas Seleccionadas: </h5>
                <div class="userH5" v-for="(butaca,c) in reserva.Butacas" :key="'butacasSeleccionadas'+c">
                  <h5>{{butaca.fila}}{{butaca.columna}}</h5>
                </div>          
                <h5>Combos: </h5>
                <div class="userH5" v-for="(combo,c) in reserva.Combos" :key="'combos'+c">
                  <h5>x{{combo.cant}} {{combo.nombre}}</h5>
                </div>
                <h5>Total Combo: </h5>
                <div class="userH5" v-if="reserva.Dolar == 1">
                  <h5>{{reserva.TotalCombo}}u$d</h5>
                </div>
                <div class="userH5" v-if="reserva.Dolar == 0">
                  <h5>${{reserva.TotalCombo}}</h5>
                </div> 
                <h5>Total: </h5>
                <div class="userH5" v-if="reserva.Dolar == 1">
                  <h5>{{reserva.Total}}u$d</h5>
                </div>
                <div class="userH5" v-if="reserva.Dolar == 0">
                  <h5>${{reserva.Total}}</h5>
                </div>
                <b-input-group-append class="contenedorB">
                  <b-button class="botonAdmin" @click="eliminarReserva(reserva)">Eliminar Reserva</b-button>
                </b-input-group-append>
                <h5>----------------------</h5>
              </td>  
            </tr>
          </table> 
        </div>

        <br>

        <div class="backgroundAdminDatos">
          <table class="tablaDatos">
            <h3>Datos de Usuario</h3>
            <tr v-for="(usuario,u) in usuarios" :key="'usuario'+u">
              <td class="userH5" v-if="usuario.usuario != 'admin'">
                <h5>Usuario: {{usuario.usuario}}</h5>
                <h5>Contrasenia: {{usuario.contrasenia}}</h5>	
                <h5>Vip: {{usuario.vip}}</h5>
                <h5>Nombre: {{usuario.nombre}}</h5>
                <h5>Apellido: {{usuario.apellido}}</h5>
                <h5>Cant Pelis Vistas: {{usuario.cantPelisVistas}}</h5>
                <b-input-group-append class="contenedorB">
                  <b-button class="botonAdmin" @click="eliminarUsuario(usuario)">Eliminar Usuario</b-button>
                </b-input-group-append>
                <h5>-----------------------------</h5>          
              </td>  
            </tr>
          </table>
          <b-input-group-append class="contenedorB">
            <b-button class="botonAdmin"><router-link to="/Informe">Generar Informe</router-link></b-button>
          </b-input-group-append>
        </div>

        
      </div>
      
      <div class="background" v-if="usuario.usuario != 'admin'">
        <h3>Reservas</h3>
        <div class="normalUserReservas">   
            <div v-for="(reserva,r) in reservas" :key="'reservaAdmin'+r">
              <div class="userH5" v-if="reserva.Usuario == usuario.usuario">
                <h5>Pelicula: {{reserva.Pelicula}}</h5>	
                <h5>Dia: {{reserva.Dia}} {{reserva.fecha}}</h5>
                <h5>Horario: {{reserva.Horario}}</h5>
                <h5>Butacas Seleccionadas: </h5>
                <div class="userH5" v-for="(butaca,c) in reserva.Butacas" :key="'butacasS'+c">
                  <h5>{{butaca.fila}}{{butaca.columna}}</h5>
                </div>          
                <h5>Combos: </h5>
                <div class="userH5" v-for="(combo,c) in reserva.Combos" :key="'CombosS'+c">
                  <h5>x{{combo.cant}} {{combo.nombre}}</h5>
                </div>
                <h5>Total Combo:<div class="confirmar" v-if="reserva.Dolar == 1">{{reserva.TotalCombo}}u$d</div>
                <div class="confirmar" v-if="reserva.Dolar == 0">${{reserva.TotalCombo}}</div></h5>
                <h5>Total: <div class="confirmar" v-if="reserva.Dolar == 1">{{reserva.Total}}u$d</div>
                <div class="confirmar" v-if="reserva.Dolar == 0">${{reserva.Total}}</div></h5> 
                <h5>-----------------------------</h5>
              </div>
            </div>
        </div>
      </div>      
    </div> 
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      usuario: this.$store.getters.usuario,
      reservas: this.getReservas(),
      usuarios: this.getUsuarios(),
      cantPelisVistas: 0
    }
  },
  methods: {
    sumar() {
      for (let i = 0; i < this.reservas.length; i++) {
         if (this.reservas[i].Usuario == this.$store.getters.usuario.usuario) {
        this.cantPelisVistas = this.cantPelisVistas+1
        console.log(this.cantPelisVistas)
      }
        
      }      
    },
    getReservas() {
      axios.get('https://5fbc46e9c09c200016d4192c.mockapi.io/Confirmar')
      .then((response)=> {
        const respuesta = response.data
        this.reservas=respuesta 
        this.sumar()             
      })      
    },
    getUsuarios() {
      axios.get('https://5fbc46e9c09c200016d4192c.mockapi.io/Usuarios')
      .then((response)=> {
        const respuesta = response.data
        this.usuarios=respuesta        
      })
    },
    async eliminarUsuario(usuario) {      
      let i =0;
      this.valorEncontrado=false; 
      while ( (i<this.usuarios.length)&&(this.valorEncontrado==false)) {      
        if(this.usuarios[i].id == usuario.id) {                        
          await axios.delete('https://5fbc46e9c09c200016d4192c.mockapi.io/Usuarios'+"/"+usuario.id);
          i=this.usuario.length
          this.eliminarReservaPorUsuario(usuario)
          console.log(usuario)
          this.$router.push('/');
        } else {
          i++;
          this.error = false;
        }
      }
    },
    async eliminarReservaPorUsuario(usuario) {      
      let i=0;
      while ( (i<this.reservas.length)) {      
        if(this.reservas[i].Usuario == usuario.usuario) {                        
          await axios.delete('https://5fbc46e9c09c200016d4192c.mockapi.io/Confirmar'+"/"+this.reservas[i].id);          
        } else {          
          this.error = false;
        }
        i++;
      }
    },
    async eliminarReserva(reserva) {      
      let i =0;
      this.valorEncontrado=false; 
      while ( (i<this.reservas.length)&&(this.valorEncontrado==false)) {      
        if(this.reservas[i].id == reserva.id) {                        
          await axios.delete('https://5fbc46e9c09c200016d4192c.mockapi.io/Confirmar'+"/"+reserva.id);
          i=this.reservas.length
          console.log(reserva)
          this.$router.push('/');
        } else {
          i++;
          this.error = false;
        }
      }
    }
  },
}
</script>

<style scoped>
.cuenta {
  display: inline-block;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
}

.login {
  display: inline-block;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
}

.background {
  display: inline-table;
  width: 25%;
  margin: 30px 30px 30px 30px;
  background-color: #111E2E;
  border: 2px solid rgba(21, 34, 50, 0.7);
  border-radius: 10px;
}

.background > h3 {
  font-size: 27px;
  color: #C7D5E5;
}

.noUser {
  display: inline-block;
  width: 100%;
  margin: 0px;
  padding: 0px;
}

.user {
  display: inline-block;
  width: 100%;
  margin: 0px;
  padding: 0px;
}

.backgroundAdmin {
  display: inline-block;
  width: 20%;
  margin: 30px 30px 30px 30px;
  background-color: #111E2E;
  border: 2px solid rgba(21, 34, 50, 0.7);
  border-radius: 10px;
}

.backgroundAdmin > h3 {
  font-size: 27px;
  color: #C7D5E5;
}

.backgroundAdminDatos {
  display: inline-block;
  width: 20%;
  margin: 30px 30px 30px 30px;
  background-color: #111E2E;
  border: 2px solid rgba(21, 34, 50, 0.7);
  border-radius: 10px;
}

.tablaReservas {
  display: inline-block;
  width: 100%;
  margin: 10px 0px 0px 0px;
}

.tablaReservas > h3 {
  font-size: 27px;
  color: #C7D5E5;
}

.tablaReservas > h5 {
  font-size: 23px;
  color: #9FADBD;
}

.tablaDatos {
  display: inline-block;
  width: 100%;
  text-align: justify;
  margin: 10px 0px 0px 20px;
}

.tablaDatos > h3 {
  font-size: 27px;
  color: #C7D5E5;
}

.trDatos {
  margin: 0px 10px 15px 10px;
}

.normalUserReservas {
  display: inline-block;
  width: 100%;
  margin: 0px;
  padding: 0px;
}

.user > h5 {
  font-size: 23px;
  color: #9FADBD;
}

.userH5 > h5 {
  font-size: 23px;
  color: #9FADBD;
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
  background-color: rgba(21, 34, 50, 0.3);
  font-weight: bold;
}

.botonAdmin {
  padding: 5px;
  border: 1px solid rgba(11, 22, 34, 0.7);
  border-radius: 10px;
  margin: 0px 50px 0px 50px;
  width: 100px;
  color: #9FADBD;
  background-color: rgba(11, 22, 34, 0.3);
  font-weight: bold;
}

.boton :hover{ 
  color: #C7D5E5;
  background-color: none;
}
</style>