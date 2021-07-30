<template>
  <div class="home">
    {{posts}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Tabla from '../components/Tabla.vue'

import {mapState, mapActions} from 'vuex'


export default {
  name: 'Home',
  components: {
    
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
