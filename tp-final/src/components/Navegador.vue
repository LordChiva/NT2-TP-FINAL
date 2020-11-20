<template>
    <div id="contenedorNavegacion">
        <div class="pestaniaNavegacion">
            <table>
                <tr>
                    <div id="nav">
                        <b-input-group-append class="contenedorB">
                            <b-button class="boton" variant="outline-primary"><router-link to="/">Inicio</router-link></b-button>
                            <b-button class="boton" variant="outline-primary"><router-link to="/Productos">Productos</router-link></b-button>
                            <b-button class="boton" variant="outline-primary"><router-link to="/Cuenta">Cuenta</router-link></b-button>
                        </b-input-group-append>
                    </div>
                </tr>      
            </table>
        </div>
    </div>
</template>

<style scoped>
#contenedorNavegacion{
    display: inline-grid;
    width: 100%;
    height: 45px;
    background-color: rgba(21, 34, 50, 0.7);
   justify-content: space-around;
}

.pestaniaNavegacion{
    display: inline-block;
    width: 40%;
}

.pestaniaNavegacion > table{
    display: inline-block;
    width: 100%;
    text-align: center;
}

.pestaniaNavegacion > table , tr{
    display: inline-block;
    width: 100%;
    text-align: center;
}

#nav a {
  font-weight: bold;
  color: #9FADBD;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #DA4127;
}

.contenedorB{
    padding: 5px;
    display: inline-flex;
    justify-content: center;
}

.boton{
    padding: 5px;
    border: 1px solid rgba(21, 34, 50, 0.7);
    border-radius: 10px;
    margin: 0px 20px 0px 20px;
    width: 100px;
    color: #9FADBD;
    background-color: rgb(21, 34, 50, 0.3);
    font-weight: bold;
}

/**NO BORRAR LOS COMENTARIOS DE ABAJO*/

/* .btn-outline-primary {
  color: #007bff;
  border-color: #007bff;
} */

/*bootstrap/dist/css
    .btn-outline-primary:hover {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
    }
*/

.boton :hover{ 
    color: #C7D5E5 !important;
}
</style>