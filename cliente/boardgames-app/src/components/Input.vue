<template>
  <div>
    
    <label :for="id">Titulo:</label>
    <b-form-input
      :id="id"
      :state="error"
      :placeholder="placeholder"
      :type="type"
      :disabled="disabled"
      :max="maxlength"
      trim
    ></b-form-input>
    <b-form-invalid-feedback>
      {{mensajeError}}
    </b-form-invalid-feedback>

    <!-- Se deberán de ingresar los datos:
- Name
- Publisher
- Description
- Category
- Year -->

  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    id: {
      type: [String, Number],
      require: true,
    },
    titulo: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    disabled: {
        type: Boolean,
        default: false
    },
    placeholder: {
        type: String,
        default: ''
    },
    value: {
        type: [String, Number],
        default: ''
    },
    readonly: {
        type: Boolean,
        default: false
    },
    error: {
        type: Boolean,
        default: false
    },
    mensajeError: {
        type: String,
        default: 'Campo obligatorio'
    }
  },
  
};
</script>

<style></style>
