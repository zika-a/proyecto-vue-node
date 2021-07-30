import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts:[],
  },
  mutations: {
    SET_POSTS(state,data){
      state.posts = data;
    }
  },
  actions: {
    listar({commit}){
      axios.get('http://localhost:8080/boardgame')
      .then(Response =>commit('SET_POSTS', Response.data))      
      
    }
  },
  modules: {
  }
})
