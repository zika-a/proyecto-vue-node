<template>
  <div class="tabla">
      <Tabla :items="posts" :fields="campos"/>
  </div>

</template>

<script>
import Tabla from '.../components/Tabla.vue'

export default {
  name: 'Tabla',
  components: {
    Tabla,
  },
  data(){
    return{
      campos:[
        {
          key:'name',
          label:'Nombre'
        },
        {
          key:'publisher',
          label:'Editor'
        },
        {
          key:'category',
          label:'Categoria'
        },
        {
          key:'year',
          label:'Año'
        }
      ]
    }
  },
  computed:{
    ...mapState(['posts'])
  },
  methods:{
    ...mapActions(['getPosts'])
  },
  created(){
    this.getPosts()
  }


}
</script>

<style>

</style>