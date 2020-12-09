<template>
  <div class="cuenta">
    <div class="login">
      <div v-if="usuario == null">
        <b-button class="botton"><router-link to="/Usuarios">Login/Registro</router-link></b-button>
        <h3>No has ingresado un Usuario</h3>
      </div> 
      <div v-if="usuario != null">
        <h3>Usuario: {{usuario.usuario}}</h3>
        <div v-if="this.usuario.vip == true">
          <h3>Es Vip</h3>
        </div>
        <h3>Nombre: {{usuario.nombre}}</h3>
        <h3>Apellido: {{usuario.apellido}}</h3>
        <h3>Cantidad de Peliculas Vistas: {{cantPelisVistas}}</h3>
      </div>   

      <div v-if="usuario.usuario == 'admin'">   
        <h1>Reservas</h1>
        <table class="tableContainer">
          <tr class="tr"  v-for="(reserva,r) in reservas" :key="'reserva'+r">
            <td>
              <h4>Usuario: {{reserva.Usuario}}</h4>
              <h4>Pelicula: {{reserva.Pelicula}}</h4>	
              <h4>Dia: {{reserva.Dia}} {{reserva.fecha}}</h4>
              <h4>Horario: {{reserva.Horario}}</h4>
              <h4>Butacas Seleccionadas: </h4>
              <div v-for="(butaca,c) in reserva.Butacas" :key="'butacasSeleccionadas'+c">
                <h4>{{butaca.fila}}{{butaca.columna}}</h4>
              </div>          
              <h4>Combos: </h4>
              <div v-for="(combo,c) in reserva.Combos" :key="'combos'+c">
                <h4>x{{combo.cant}} {{combo.nombre}}</h4>
              </div>
              <h4>Total Combo: <div v-if="reserva.Dolar == 1">{{reserva.TotalCombo}}u$d</div>
              <div v-if="reserva.Dolar == 0">${{reserva.TotalCombo}}</div></h4> 
              <h4>Total: <div v-if="reserva.Dolar == 1">{{reserva.Total}}u$d</div>
              <div v-if="reserva.Dolar == 0">${{reserva.Total}}</div></h4> 
              <button @click="eliminarReserva(reserva)">Eliminar Reserva</button>
            </td>  
          </tr>
        </table> 
        
        <h1>Datos de Usuario</h1>
        <table class="tableContainer">
          <tr class="tr" v-for="(usuario,u) in usuarios" :key="'usuario'+u">
            <td v-if="usuario.usuario != 'admin'">
              <h4>Usuario: {{usuario.usuario}}</h4>
              <h4>Contrasenia: {{usuario.contrasenia}}</h4>	
              <h4>Vip: {{usuario.vip}}</h4>
              <h4>Nombre: {{usuario.nombre}}</h4>
              <h4>Apellido: {{usuario.apellido}}</h4>
              <h4>Cant Pelis Vistas: {{usuario.cantPelisVistas}}</h4>
              <button @click="eliminarUsuario(usuario)">Eliminar Usuario</button>              
            </td>  
          </tr>
        </table>
        <b-button class="boton"><router-link to="/Informe">Informe</router-link></b-button>
      </div>
      
      <div v-if="usuario.usuario != 'admin'">   
        <h1>Reservas</h1>
          <div v-for="(reserva,r) in reservas" :key="'reservaAdmin'+r">
            <div v-if="reserva.Usuario == usuario.usuario">
              <h4>Pelicula: {{reserva.Pelicula}}</h4>	
              <h4>Dia: {{reserva.Dia}} {{reserva.fecha}}</h4>
              <h4>Horario: {{reserva.Horario}}</h4>
              <h4>Butacas Seleccionadas: </h4>
              <div v-for="(butaca,c) in reserva.Butacas" :key="'butacasS'+c">
                <h4>{{butaca.fila}}{{butaca.columna}}</h4>
              </div>          
              <h4>Combos: </h4>
              <div v-for="(combo,c) in reserva.Combos" :key="'CombosS'+c">
                <h4>x{{combo.cant}} {{combo.nombre}}</h4>
              </div>
              <h4>Total Combo: {{reserva.TotalCombo}}</h4>
              <h4>Total: {{reserva.Total}}</h4> 
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

</style>