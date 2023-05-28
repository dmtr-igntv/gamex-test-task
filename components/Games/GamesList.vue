<template>
  <div>
    <div v-if="games.length" class="games-list__wrapper">
      <div v-for="game in games" :key="game.id">
        <game-item :game="game" :imgPath="getImagePath(game.id)" />
      </div>
    </div>
    <div class="games-empty" v-else>
      <h3>No games found</h3>
    </div>
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
    grid-template-columns: repeat(6, 1fr);
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

.games-empty {
  margin: auto;
  max-width: 250px;
}

.games-empty h3 {
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.5;
  text-align: center;
}
</style>
