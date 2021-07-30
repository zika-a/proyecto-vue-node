<template>
  <div class="home">
    <Tabla :items="favoritos" :fields="fields"></Tabla>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Tabla from '../components/Tabla.vue'
import Vue from "vue"
import {mapActions} from 'vuex'


export default {
  name: 'Home',
  components: {
    Tabla
  },
  data(){
    return{
      favoritos: [],
      fields:[
        {
          key:"idBoardgame"
        },
        {
          key:"name",
          label:"Nombre"
        }, 
        {
          key: "publisher",
          label: "Editor"
        },
        {
          key:"year",
          label:"Año"
        },
        {
          key:"category",
          label:"Categoría",
        }
      ],
    }
  },
  methods:{
    ...mapActions(['listarFav'])
  },
  mounted() {
    this.listarFav({
      onComplete: (response) => {
        Vue.set(this, "favoritos", response.data.result);
      },
    });
  },

}
</script>
