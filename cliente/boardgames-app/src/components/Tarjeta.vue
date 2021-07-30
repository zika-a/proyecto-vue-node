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
      <b-button class="mx-2" :to="`/editar/${id}`">Editar</b-button>
      <b-button class="mx-2" @click="eliminar()" variant="danger"
        >Eliminar</b-button>
      <b-form-checkbox
        @change="fav()"
        v-model="favo"
        value="1"
        unchecked-value="0"
        class="d-inline-block mx-2"
        >Favorite</b-form-checkbox
      >
    </b-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data(){
    return{
      favo: this.favorites,
    }
  },
  props: {
    id: Number,
    name: String,
    year: String,
    description: String,
    publisher: String,
    favorites: Number,
  },
  methods: {
    ...mapActions(["addFav", "eliminarBoardgame", "eliminarFav"]),
    fav() {
      if (this.favo == 1) {
        this.addFav({
          idBoardgame: { idBoardgame: this.id },
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
      }else{
        this.eliminarFav({
          id: this.id,
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
      }
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

<style></style>
