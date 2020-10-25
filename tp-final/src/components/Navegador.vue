<template>
    <div id="contenedorNavegacion">
        <div class="pestaniaNavegacion">
            <table>
                <tr>
                    <td><input type="button" value="Inicio"></td>
                    <td><input type="button" value="Peliculas"></td>
                    <td><input type="button" value="Productos"></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style scoped>
#contenedorNavegacion{
    display: inline-flex;
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

.pestaniaNavegacion > table > tr > td{
    padding: 5px;
}

.pestaniaNavegacion > table > tr > td > input{
    padding: 5px;
    border: 1px solid rgba(21, 34, 50, 0.7);
    border-radius: 10px;
    margin: 0px 10px 0px 10px;
    width: 150px;
    color: #9FADBD;
    background-color: rgba(21, 34, 50, 0.7);
    font-weight: bold;
}

.pestaniaNavegacion > table > tr > td > input:hover{
    color: #C7D5E5;
    
}


</style>