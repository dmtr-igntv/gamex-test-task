<template>
  <div class="game-item">
    <img :src="imgPath" :alt="game.id" />
  </div>
</template>

<script>
export default defineComponent({
  name: "game-item",
  props: {
    game: Object,
    imgPath: String,
  },

  setup() {
    return {};
  },
});
</script>

<style scoped>
.game-item {
  width: 100%;
  height: 100%;
}

.game-item img {
  max-width: 100%;
  height: auto;
}
</style>
