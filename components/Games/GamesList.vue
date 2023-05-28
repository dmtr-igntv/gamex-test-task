<template>
  <div>
    <ul v-if="games.length">
      <li v-for="game in games" :key="game.id">
        <img v-if="game.id" :src="getImagePath(game.id)" :alt="game.id" />
      </li>
    </ul>
    <span v-else>Пусто</span>
  </div>
</template>

<script>
export default defineComponent({
  name: 'games-list',
  props: {
    games: {
      type: Array,
      required: true,
    }
  },
  setup() {
    const getImagePath = (src) => {
      return "images/" + src.replace("/", "_") + ".webp";
    };

    return { getImagePath }
  },
});
</script>
