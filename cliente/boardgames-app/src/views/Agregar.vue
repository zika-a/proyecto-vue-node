<template>
  <div class="mx-5">
    <form @submit.prevent="guardarJuego()">
      <h1 class="d-inline-block">Añadir juego de mesa</h1>
      <b-button
        class="d-inline-block rounded float-end"
        size="lg"
        type="submit"
        pill
        variant="primary"
        >Añadir</b-button
      >
      <div>
        <label class="mt-3" for="name">Nombre del juego de mesa:</label>
        <b-form-input
          v-model="juego.name"
          id="name"
          :state="validacionNombre"
          placeholder="Ingresar nombre del juego"
          type="text"
          trim
        ></b-form-input>
        <b-form-invalid-feedback>
          {{ msjNom }}
        </b-form-invalid-feedback>
      </div>
      <div>
        <label class="mt-3" for="publisher">Editor: </label>
        <b-form-input
          v-model="juego.publisher"
          id="publisher"
          :state="validacionPublisher"
          placeholder="Ingresar editor del juego"
          type="text"
          trim
        ></b-form-input>
        <b-form-invalid-feedback>
          {{ msjPublisher }}
        </b-form-invalid-feedback>
      </div>
      <div>
        <label class="mt-3">Categoria: </label>
        <b-form-select
          v-model="juego.category"
          :options="opciones"
          :state="validacionCategory"
          size="sm"
          class="mt-3 form-select"
        ></b-form-select>
        <b-form-invalid-feedback>
          {{ msjCategory }}
        </b-form-invalid-feedback>
      </div>

      <div>
        <label class="mt-3" for="description">Descripción: </label>
        <b-form-input
          v-model="juego.description"
          id="description"
          :state="validacionDescription"
          placeholder="Escriba la descripción"
          type="text"
          trim
        ></b-form-input>
        <b-form-invalid-feedback>
          {{ msjDescription }}
        </b-form-invalid-feedback>
      </div>
      <div>
        <label class="mt-3" for="year">Año: </label>
        <b-form-input
          v-model="juego.year"
          id="year"
          :state="validacionYear"
          placeholder="Escriba el año"
          type="text"
          trim
        ></b-form-input>
        <b-form-invalid-feedback>
          {{ msjYear }}
        </b-form-invalid-feedback>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions} from 'vuex';
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
    validacionNombre() {
      return (
        this.juego.name !== undefined &&
        this.juego.name.trim() !== "" &&
        this.juego.name.length <= 80
      );
    },
    validacionPublisher() {
      return (
        this.juego.publisher !== undefined &&
        this.juego.publisher.trim() !== "" &&
        this.juego.publisher.length <= 60
      );
    },
    validacionCategory() {
      return this.juego.category !== null;
    },
    validacionDescription() {
      return this.juego.description.length <= 200 || this.juego.description.length ===0;
    },
    validacionYear() {
      return this.juego.year.length === 4 ||
      this.juego.year.length === 0;
    },
    msjNom() {
      if (this.juego.name === "") {
        return "Campo obligatorio";
      } else if (this.juego.name.length > 80) {
        return "Longitud máxima exedida";
      }
    },
    msjPublisher() {
      if (this.juego.publisher === "") {
        return "Campo obligatorio";
      } else if (this.juego.publisher.length > 80) {
        return "Longitud máxima exedida";
      }
    },
    msjCategory() {
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
    ...mapActions(["agregarJuego"]),
    guardarJuego() {
       if (this.validarCampos()) {//falta las validacioens
        this.erroresValidacion = false;
        console.log("Si puedo guardar");

        this.agregarJuego({
          params: this.juego,
          onComplete: (response) => {
            console.log(response);
            this.$notify({
              type: "success",
              title: response.data.mensaje,
            });
            this.$router.push({
                name: 'Inicio'
            })
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
    validarCampos(){
      if(this.juego.name.length > 80 ||this.juego.publisher.length > 60 || this.juego.description.length > 200 || (this.juego.year.length !=0  &&  this.juego.year.length !=4)){
        return false;
      }
      return true;
    }
  },
};
</script>

<style scoped></style>
