<template>
  <div class="peliculas">
    <ul>
        <li v-for="(pelicula,index) in peliculas" :key="index">
            <peliculas-item :title="pelicula.nombre"> </peliculas-item>

        </li>
    </ul>
    
  </div>
</template>


<script>
    

    Vue.component ('peliculas-item',
    {
        template:`
        <div>
        <h1> {{titulo}} </h1>
        <h2> alo </h2>
        
        </div>
        
        `,

         
           
                
            props:['titulo']
        
        
        
        
    })

    

    new Vue (
{
    el:'#peliculas',
    data()
    {
        return{
            peliculas:[{nombre:'Avatar'},{nombre:'Narnia'}]
        }
    }
}

    )

  export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
    
    
</script>
    