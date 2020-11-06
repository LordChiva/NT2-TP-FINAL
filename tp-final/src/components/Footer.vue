<template>
    <div id="contenedorFooter">
        <div class="pestaniaFooter">
            <table>
                <tr>
                    <div class="logo">  
                        <img alt="Cine logo" src="./assets/LogoPochoclos.png">
                    </div>
                    <h1>footer</h1>
                </tr>      
            </table>
        </div>
    </div>
</template>

<style>
#contenedorFooter{
    display: inline-flex;
    width: 100%;
    height: 45px;
    background-color: rgba(21, 34, 50, 0.7);
    justify-content: space-around;
}

.pestaniaFooter{
    display: inline-block;
    width: 40%;
}

.pestaniaFooter > table{
    display: inline-block;
    width: 100%;
    text-align: center;
}

.pestaniaFooter > table , tr{
    display: inline-block;
    width: 100%;
    text-align: center;
}

.logo{
  display: inline-block;
  width: 13%;
}

.logo > img{
  display: inline-block;
  width: 110px;
}
</style>