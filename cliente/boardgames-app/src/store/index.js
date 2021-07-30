import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

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
    editarJuego({commit}, {id, params, onComplete, onError}){
      axios.put(`http://localhost:3000/boardgame/${id}`, params)
      .then(onComplete)
      .catch(onError);
    },
    obtenerJuego({commit}, {id, onComplete, onError}) {
      axios.get(`http://localhost:3000/boardgame/${id}`)
      .then(res => {
        commit('SET_JUEGO', res.data.result);
        onComplete(res);
      })
      .catch(onError);
    },
  },
  modules: {
  }
})
