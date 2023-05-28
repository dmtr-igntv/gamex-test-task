<template>
  <div>
    <div v-if="games.length" class="games-list__wrapper">
      <div v-for="game in games" :key="game.id">
        <game-item :game="game" :imgPath="getImagePath(game.id)" />
      </div>
    </div>
    <span v-else>Пусто</span>
  </div>
</template>

<script>
import GameItem from "./GameItem.vue";

export default defineComponent({
  components: { GameItem },
  name: "games-list",
  props: {
    games: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const getImagePath = (src) => {
      return "images/" + src.replace("/", "_") + ".webp";
    };

    return { getImagePath };
  },
});
</script>
<style>
.games-list__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 286px));
    grid-gap: 10px;
}

@media (max-width: 1920px) {
  .games-list__wrapper {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media (max-width: 1280px) {
  .games-list__wrapper {
    grid-template-columns: repeat(4, 1fr); /* 992 - 768 (4x3 grid) */
  }
}

@media (max-width: 768px) {
  .games-list__wrapper {
    grid-template-columns: repeat(3, 1fr); /* 575 (3x4 grid) */
  }
}

@media (max-width: 575px) {
  .games-list__wrapper {
    grid-template-columns: repeat(2, 1fr); /* 320 (2x6 grid) */
  }
}
</style>
