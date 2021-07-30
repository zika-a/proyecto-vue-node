<template>
  <div>
    <h4>ID: {{ $route.params.id }}</h4>
    <h2>Nombre: {{ juego.name }}</h2>
    <h3>Editor: {{ juego.publisher }}</h3>
    <h4>Categoria: {{opciones[index].text}}</h4>
    <h5>Año: {{ juego.year }}</h5>
    <p>Descripción: {{ juego.description }}</p>
  </div>
</template>

<script>
import Vue from "vue";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      juego: {},
      opciones: [
        { value: "11", text: "Aventura" },
        { value: "12", text: "Puzzle" },
        { value: "13", text: "Estrategía" },
        { value: "14", text: "Fantasía" },
        { value: "15", text: "Civilización" },
      ],
    };
  },
  computed: {
    index: function(){
      return this.opciones.findIndex(x => x.value == this.juego.category);
    }
  },
  methods: {
    ...mapActions(["obtenerJuego"]),
  },
  mounted() {
    this.obtenerJuego({
      id: this.$route.params.id,
      onComplete: (response) => {
        Vue.set(this, "juego", response.data.result);
      },
    });
  },
};
</script>

<style></style>
