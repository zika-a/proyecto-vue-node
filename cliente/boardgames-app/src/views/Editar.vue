<template>
  <div>
    <h1>Editar juego</h1>
    <form @submit.prevent="guardarJuego()">
      <Input :value="$route.params.id" titulo="Clave" id="id" disabled />
      <Input v-model="juego.name" titulo="Nombre" id="name" disabled />

      <Input
        v-model="juego.publisher"
        titulo="Editor"
        id="publisher"
        type="text"
        placeholder="Ingrese el editor"
        :maxlength="60"
      />
      <div>
        <label class="mt-3">Categoria: </label>
        <b-form-select
          v-model="juego.category"
          :options="opciones"
          size="sm"
          class="mt-3 form-select"
        ></b-form-select>
      </div>
      <Input
        v-model="juego.year"
        titulo="Año"
        id="year"
        type="number"
        placeholder="Ingrese el año"
        :maxlength="4"
      />

      <b-button type="submit" variant="primary" class="my-2">Guardar</b-button>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import Input from "../components/Input.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "Editar",
  components: { Input },
  data() {
    return {
      juego: {},
      erroresValidacion: false,
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
    validacionDatos() {
      if(juego.publisher.length === 0){
        return 1;
      }else if (juego.publisher.length > 60){
        return 2;
      } else if(juego.year.length === 0){
        return 0;
      } else if(juego.year.length != 4){
        return 3;
      }
      return 0;
    },
  },
  methods: {
    ...mapActions(["editarJuego", "obtenerJuego"]),
    guardarJuego() {
        this.editarJuego({
          id: this.$route.params.id,
          params: {publisher: this.juego.publisher, category: this.juego.category, year: this.juego.year},
          onComplete: (response) => {
            console.log(response);
            this.$notify({
              title: response.data.mensaje,
              type: "success",
            });
            this.$router.push({
              name: "Home",
            });
          },
          onError: (error) => {
            console.log(error.response.data.mensaje);
            this.$notify({
              type: "error",
              title: error.response.data.mensaje,
            });
          },
        });
    },
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
