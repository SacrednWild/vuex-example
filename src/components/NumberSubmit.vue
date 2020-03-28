<template>
  <div>
    <input v-model.number="numberInput" type="number" />
    <button v-on:click="addNumber( numberInput )"></button>
  </div>
</template>

<script>
export default {
  name: "NumberSubmit",
  data() {
    return { numberInput: 0 };
  },
  methods: {
    addNumber( numberInput ) {
      this.$store.dispatch( "addNumber", Number( numberInput ) );
    }
  }
};
</script>