<template>
  <form>
    <input type="text" v-model="inputData" @keyup="search" />
  </form>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "search-form",

  emits: ["search", "loading"],

  setup(props, { emit }) {
    const inputData = ref("");

    const search = () => {
      emit("search", inputData);
      emit("loading");
    };

    return { inputData, search };
  },
});
</script>

<style scoped></style>
