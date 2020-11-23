<template>
    <div id="contenedorFooter">
        <div class="pestaniaFooter">
            <table>
                <tr>
                    <td>
                        <div class="logo">  
                            <img alt="Cine logo" src="../assets/LogoPochoclos.png"><h1>CinePOP</h1>
                        </div>
                    </td>
                    <td>
                        <h3>Navegacion:</h3>
                        <b-button class="boton" variant="outline-primary"><router-link to="/">Inicio</router-link></b-button>
                        <b-button class="boton" variant="outline-primary"><router-link to="/Productos">Productos</router-link></b-button>
                        <b-button class="boton" variant="outline-primary"><router-link to="/Cuenta">Cuenta</router-link></b-button>
					</td>
                    <td>
                        <h3><router-link to="/">Peliculas:</router-link></h3>
                        <table>
                            <tr>
                                <td>
                                    <h5>El Rey León</h5>
                                    <h5>El origen</h5>
                                    <h5>Star Wars: Episodio IX</h5>
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
					</td>
                    <td>
                        <h3><router-link to="/Productos">Combos:</router-link></h3>
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
                    <td>                        
                        <div>
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
                        </div> 
                    </td>
                </tr>      
            </table>
        </div>
    </div>
</template>

<style>
#contenedorFooter{
    display: inline-flex;
    width: 100%;
    background-color: rgba(21, 34, 50, 0.7);    
}

.pestaniaFooter{
    display: inline-block;
    width: 40%;
    margin-left: 150px;
}

.pestaniaFooter > table{
    display: inline-block;
    width: 100%;
}

.pestaniaFooter > table , tr{
    display: inline-flex;
    width: 100%;    
}

.pestaniaFooter > table , tr, td{
    margin-right: 55px;
}
</style>