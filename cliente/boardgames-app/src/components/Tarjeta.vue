<template>
  <div>
    <b-card :title="name" :sub-title="year">
      <b-card-text>
        {{ description }}
      </b-card-text>

      <b-card-text>{{ publisher }}</b-card-text>
      <b-button class="mx-2" :to="`/detalle/${id}`" variant="outline-primary"
        >Visualizar</b-button
      >
      <b-button class="mx-2" @click="anadirFav()">Favoritos</b-button>
      <b-button class="mx-2" :to="`/editar/${id}`">Editar</b-button>
      <b-button class="mx-2" @click="eliminar()" variant="danger">Eliminar</b-button>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Visualizar from "../views/Visualizar.vue"
export default {
  props: {
    id: Number,
    name: String,
    year: String,
    description: String,
    publisher: String,
  },
  methods: {
    ...mapActions(["addFav", "eliminarBoardgame"]),
    anadirFav() {
      this.addFav({
        idBoardgame: {idBoardgame: this.id},
        onComplete: (response) => {
          console.log(response);
          this.$notify({
            type: "success",
            title: response.data.mensaje,
          });
          this.$router.push({
            name: "Visualizar",
          });
        },
        onError: (error) => {
          this.$notify({
            type: "error",
            title: error.response.data.mensaje,
          });
        },
      });
    },
    eliminar() {
      this.eliminarBoardgame({
        id: this.id,
        onComplete: (response) => {
          console.log(response);
          this.$notify({
            type: "success",
            title: response.data.mensaje,
          });
          this.$router.push({
            name: "Inicio",
          });
        },
        onError: (error) => {
          this.$notify({
            type: "error",
            title: error.response.data.mensaje,
          });
        },
      });
    },
  },
};
</script>

<style>
</style>
