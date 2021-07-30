<template>
  <div class="mx-5">
    <form @submit.prevent="editar()">
      <h1 class="d-inline-block">Editar juego de mesa</h1>
      <b-button
        class="d-inline-block rounded float-end"
        size="lg"
        type="submit"
        pill
        variant="primary"
        >Editar</b-button
      >
      <div>
        <label class="mt-3" for="idx">ID: </label>
        <b-form-input
          :value="this.$route.params.id"
          id="idx"
          readonly
          type="text"
          disabled
          trim
        ></b-form-input>
      </div>
      <div>
        <label class="mt-3" for="name">Nombre del juego de mesa:</label>
        <b-form-input
          v-model="this.juego.name"
          id="name"
          type="text"
          readonly
          disabled
          trim
        ></b-form-input>
      </div>
      <div>
        <label class="mt-3" for="publisher">Editor: </label>
        <b-form-input
          v-model="this.juego.publisher"
          id="publisher"
          type="text"
          trim
        ></b-form-input>
      </div>
      <div>
        <label class="mt-3">Categoria: </label>
        <b-form-select
          v-model="this.juego.category"
          :options="opciones"
          size="sm"
          class="mt-3 form-select"
        ></b-form-select>
      </div>

      <div>
        <label class="mt-3" for="description">Descripción: </label>
        <b-form-input
          v-model="this.juego.description"
          id="description"
        
          placeholder="Escriba la descripción"
          type="text"
          trim
        ></b-form-input>
      </div>
      <div>
        <label class="mt-3" for="year">Año: </label>
        <b-form-input
          v-model="this.juego.year"
          id="year"
          
          placeholder="Escriba el año"
          type="text"
          trim
        ></b-form-input>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from "vue"
import { mapActions} from "vuex";
export default {
  name: "Agregar",
  components: {},
  data() {
    return {
      juego: {
        name: "",
        publisher: "",
        description: "",
        category: null,
        year: "",
      },
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
    validacionPublisher() {
      return (
        this.juego.publisher !== undefined &&
        this.juego.publisher.trim() !== "" &&
        this.juego.publisher.length <= 60
      );
    },
    validacionDescription() {
      if(this.juego.description === undefined){
        return false;
      }
      return (
        this.juego.description.length <= 200 ||
        this.juego.description.length === 0
      );
    },
    validacionYear() {
      if(this.juego.year === undefined){
        return false;
      }
      return this.juego.year.length === 4 || this.juego.year.length === 0;
    },
    msjPublisher() {
      // if (this.juego.publisher === "") {
      //   return "Campo obligatorio";
      // } else if (this.juego.publisher.length > 80) {
      //   return "Longitud máxima exedida";
      // }
      return "Campo obligatorio";
    },
    msjDescription() {
      return "Longitud máxima excedida";
    },
    msjYear() {
      return "La longitud debe de ser de 4";
    },
  },

  methods: {
    ...mapActions(["agregarJuego", "editarJuego", "obtenerJuego"]),
    editar() {
      if (this.validarCampos()) {
        this.editarJuego({
          id: this.$route.params.id,
          props: this.juego,
          onComplete: (response) => {
            console.log(response);
            this.$notify({
              type: "success",
              title: response.data.mensaje,
            });
            this.$router.push({
              name: "Home", 
            });
          },
          onError: (error) => {
            this.$notify({
              type: "error",
              title: error.response.data.mensaje,
            });
          },
        });
      } else {
        this.$notify({
          type: "error",
          title: "Verifica los campos",
        });
      }
    },
    validarCampos() {
      return true;
      if (
        this.juego[0].publisher.length > 60 ||
        this.juego[0].description.length > 200 ||
        (this.juego[0].year.length != 0 && this.juego.year.length != 4)
      ) {
        return false;
      }
      return true;
    },
  },
  created() {
    this.obtenerJuego({
      id: this.$route.params.id,
      onComplete: (response) => {
        this.juego = response.data.result[0];
      },
    });
  },
};
</script>

<style scoped></style>
