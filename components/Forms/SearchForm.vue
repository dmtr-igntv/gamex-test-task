<template>
  <form>
    <div class="search__input-wrapper">
      <img src="/icons/search-2-line.svg" alt="search-icon" />
      <input
        type="text"
        v-model="inputData"
        @keyup="search"
        placeholder="Search your game By NAME OR PROVIDER"
      />
    </div>
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

<style scoped>
.search__input-wrapper {
  width: 100%;
  height: 48px;
  padding: 8px 16px;
  background: #132118;
  border: 1px solid #09170e;
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.search__input-wrapper img {
  width: 32px;
  height: 32px;
}

.search__input-wrapper input {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  padding-left: 8px;
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 14px;
  text-transform: uppercase;
  color: #ffffff;
  background: #132118;
  opacity: 0.5;
}
</style>
