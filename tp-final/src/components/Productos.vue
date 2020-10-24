<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<template>
  <div class="productos-item">
    <ol>     
        <li v-for="productos in productosBuscadas" :key="productos.nombre">
            <span>{{ `El producto ${productos.nombre} (${productos.precio})`}} </span>
            <hr>
            <span>{{ ` ${productos.descripcion} `}} </span>
            <hr>
        </li>
    </ol>    
  </div>
</template>


<script>

   export default {
            name: 'productos-item',
            props: {
               buscar:null, 
                    form:{
                        nombre:' ', 
                        precio:' ',
                        descripcion:' ',
                        imagen:' ',                          
                    },
                    peliculas:[]  
            },
            methods:{
                
            },
            computed: {
                productosBuscadas(){
                    return this.productos.filter(productos=> this.buscar == null || productos.nombre.includes(this.buscar))
                }
            },           
            created() {
               const productos = [
                   { nombre: 'Pochoclos', precio: '100', descripcion:' ', imagen:' '},
                   { nombre: 'Gaseosa'  , precio: '80' , descripcion:' ', imagen:' '},
                   { nombre: 'Agua'     , precio: '60', descripcion:' ', imagen:' '},
                   { nombre: 'Dulces'   , precio: '900', descripcion:' ', imagen:' '},            
                ]
                this.productos = productos
            }    
        }
    
    
</script>
