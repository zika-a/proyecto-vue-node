<template>
  <div class="home">
    {{posts}}
  </div>
</template>

<script>
// @ is an alias to /src
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
