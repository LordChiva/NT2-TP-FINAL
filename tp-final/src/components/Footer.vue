<template>
    <div id="contenedorFooter">
        <div class="pestaniaFooter">
            <table>
                <tr>
                    <td>
                        <div class="logo">  
                            <img alt="Cine logo" src="../assets/LogoPochoclos.png"><h3>CinePOP</h3>
                        </div>
                    </td>
                    <td class="navegacion">
                        <h3>Navegacion:</h3>
                        <router-link to="/">Inicio</router-link><br>
                        <router-link to="/Productos">Productos</router-link><br>
                        <router-link to="/Cuenta">Cuenta</router-link>
					</td>
                    <td>
                        <div class="peliculas">
                            <h3>Peliculas:</h3>
                            <table>
                                <tr>
                                    <td>
                                        <h5>Star Wars IX</h5>
                                        <h5>El Rey León</h5>
                                        <h5>El origen</h5>
                                        <h5>Avatar</h5>
                                        <h5>Jumanji</h5>                            
                                    </td>
                                    <td>
                                        <h5>Rapidos y Furiosos</h5>
                                        <h5>Guerra Mundial Z</h5>
                                        <h5>Deadpool</h5>
                                        <h5>Jurassic World</h5>
                                    </td> 
                                </tr>
                            </table>
                        </div>
					</td>
                    <td class="combos">
                            <h3>Combos:</h3>
                            <table>
                                <tr>
                                    <td>
                                        <h5>Combo Nacho</h5>
                                        <h5>Combo Pancho</h5>                            
                                    </td>
                                    <td>
                                        <h5>Combo Super</h5>
                                        <h5>Combo Teriyaki</h5>
                                    </td> 
                                </tr>
                            </table>
					</td>
                    <td class="nosotros">                        
                        <h3>Nosotros:</h3>
                        <table>
                            <tr>
                                <td>                                
                                    <h5>Alan Bronsztein</h5>
                                    <h5>Martin Jamshon</h5>                            
                                    <h5>Sebastián Felice</h5>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>      
            </table>
        </div>
    </div>
</template>

<style scoped>
#contenedorFooter{
    display: inline-flex;
    width: 100%;
    background-color: rgba(21, 34, 50, 0.7);    
}

.pestaniaFooter{
    display: inline-flex;
    width: 100%;
    padding: 5px 0px 5px 30px;
    justify-content: space-between;
    margin: 0px 5px 0px 5px;
}

.pestaniaFooter > table{
    display: inline-block;
    width: 100%;
    margin: 0px 5px;
}

.pestaniaFooter > table , tr{
    display: inline-flex;
    width: 100%;
}

.pestaniaFooter > table , tr, td{
    margin: 0px 5px 0px 0px;
    justify-content: space-between;
}

.logo {
    display: inline-block;
    width: 100%;
    padding: 10px 0px 0px 0px;
}

.logo > h3{
    font-size: 25px;
    color: #9FADBD;
    text-align: center;
}

.navegacion {
    display: inline-block;
    width: 30%;
    padding: 10px 0px 0px 0px;
}

.navegacion > h3{
    font-size: 25px;
    color: #9FADBD;
    text-align: center;
}

.peliculas {
    display: inline-block;
    width: 100%;
    padding: 10px 0px 0px 0px;
    text-align: initial;
}

.peliculas > h3{
    font-size: 25px;
    color: #9FADBD;
}

.peliculas > table , tr, td , h5{
    font-size: 18px;
    color: #9FADBD;
}

.combos {
    display: inline-block;
    width: 15%;
    padding: 10px 0px 0px 0px;
    text-align: justify;
}

.nosotros {
    display: inline-block;
    width: 15%;
    padding: 10px 0px 0px 0px;
    text-align: justify;
}

a {
    color: #9FADBD;
    text-decoration: none;
}

a :hover {
    text-decoration: none;
    color: #C7D5E5;
}

#nav a {
    font-weight: bold;
    color: #9FADBD;
    text-decoration: none;
}
</style>