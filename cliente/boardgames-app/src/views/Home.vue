<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Tabla :items="boargames" :fields="campos"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Tabla from '../components/Tabla.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Tabla
  },
  data(){
    return{
      campos:[
        {
          key:'nombre',
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
  }

}
</script>
