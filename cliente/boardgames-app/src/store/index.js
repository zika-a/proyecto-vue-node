import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {    
    juegos:[],
    juego: {},
    loading: false,
  },
  mutations: {
    SET_JUEGOS(state, juegos) {
      state.juegos = juegos;
    },
    SET_JUEGO(state, juego) {
      state.juego = juego;
    },
    SET_LOADING(state, newValue) {
      state.loading = newValue;
    },
  },
  actions: {
    agregarJuego({commit}, {params, onComplete, onError}){
      axios.post('http://localhost:3000/boardgame', params)
      .then(onComplete)
      .catch(onError);
    },
      listarfav({commit}){
      axios.get('http://localhost:3000/favorites')
      .then(Response =>commit('SET_JUEGOS', response.data))      
      
    }
     
  },
  modules: {
  }
})
