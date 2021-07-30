<template>
  <div>
    <label :for="id" class="my-2">{{ titulo }}</label>
    <input 
        :id="id" 
        :type="type"  
        class="form-control" 
        :maxlength="maxlength" 
        :disabled="disabled"
        :placeholder="placeholder"
        :readonly="readonly"
        :value="value"
        @input="$emit('input', $event.target.value)"
    />
    <span v-if="error" class="text-danger">{{mensajeError}}</span>
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
    maxlength: {
      type: Number,
      default: 100,
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
