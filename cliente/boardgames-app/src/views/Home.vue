<template>
  <div class="home">
    <Tabla :items="listarfav" :fields="campos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Tabla from '@/components/Tabla.vue'
import {mapState, mapActions} from 'vuex'


export default {
  name: 'Home',
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
  methods:{
    ...mapActions(['listarfav'])
  },
  created(){
    this.listarfav()
  }

}
</script>
