<template>
  <div class="cuenta">
    <div class="login">
      <div v-if="usuario == null">
        <b-button class="botton"><router-link to="/Usuarios">Login/Registro</router-link></b-button>
      </div> 
      <div v-if="usuario != null">
        <h3>Usuario: {{usuario.usuario}}</h3>
        <div v-if="this.usuario.vip == true">
        <h3>Es Vip</h3>
        </div>
        <h3>Nombre: {{usuario.nombre}}</h3>
        <h3>Apellido: {{usuario.apellido}}</h3>
        <h3>Cantidad de Peliculas Vistas: {{usuario.cantPelisVistas}}</h3>
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
              <div v-for="(butaca,c) in reserva.Butacas" :key="'confirmar'+c">
                <h4>{{butaca.fila}}{{butaca.columna}}</h4>
              </div>          
              <h4>Combos: </h4>
              <div v-for="(combo,c) in reserva.Combos" :key="'confirmar'+c">
              <h4>x{{combo.cant}} {{combo.nombre}}</h4>
              </div>
              <h4>Total Combo: {{reserva.TotalCombo}}</h4> 
              <button @click="eliminarReserva(reserva)">Eliminar Reserva</button>
            </td>  
          </tr>
        </table> 
      </div>

      <div v-if="usuario.usuario != 'admin'">   
        <h1>Reservas</h1>
          <div v-for="(reserva,r) in reservas" :key="'reserva'+r">
            <div v-if="reserva.Usuario == usuario.usuario">
              <h4>Usuario: {{reserva.Usuario}}</h4>
              <h4>Pelicula: {{reserva.Pelicula}}</h4>	
              <h4>Dia: {{reserva.Dia}} {{reserva.fecha}}</h4>
              <h4>Horario: {{reserva.Horario}}</h4>
              <h4>Butacas Seleccionadas: </h4>
              <div v-for="(butaca,c) in reserva.Butacas" :key="'confirmar'+c">
                <h4>{{butaca.fila}}{{butaca.columna}}</h4>
              </div>          
              <h4>Combos: </h4>
              <div v-for="(combo,c) in reserva.Combos" :key="'confirmar'+c">
              <h4>x{{combo.cant}} {{combo.nombre}}</h4>
              </div>
              <h4>Total Combo: {{reserva.TotalCombo}}</h4>
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
      reservas: this.getReservas()
    }
  },
  methods: {
    getReservas() {
      axios.get('https://5fbc46e9c09c200016d4192c.mockapi.io/Confirmar')
      .then((response)=> {
        const respuesta = response.data
        this.reservas=respuesta
      })
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
        } 
        else {
          i++;
          this.error = false;
        }
      }
    }
  },
}
</script>