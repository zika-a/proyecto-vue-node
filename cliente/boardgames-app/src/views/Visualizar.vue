<template>
  <div>
    <h1 class="mb-3">Juegos de mesa</h1>
    <Tarjeta
      class="m-3"
      v-for="dato in datos"
      :key="dato.id"
      :id="dato.id"
      :name="dato.name"
      :year="dato.year"
      :description="dato.description"
      :publisher="dato.publisher"
      :favorites="dato.favorites"
    >
    </Tarjeta>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Vue from "vue";
import Tarjeta from "../components/Tarjeta.vue";
export default {
  name: "Visualizar",
  components: {
    Tarjeta,
  },
  data() {
    return {
      datos: {},
    };
  },
  methods: {
    ...mapActions(["listar"]),
  },
  mounted() {
    this.listar({
      onComplete: (response) => {
        Vue.set(this, "datos", response.data.result);
      },
    });
  },
};
</script>

<style></style>
