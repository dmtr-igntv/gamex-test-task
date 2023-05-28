<template>
  <section class="main__wrapper">
    <search-form @search="search" @loading="isLoading" />
    <div class="main__content">
      <games-list :games="data.data" />
      <div v-if="loading">Loading...</div>
    </div>
  </section>
</template>

<script>
import SearchForm from "@/components/Forms/SearchForm.vue";
import GamesList from "@/components/Games/GamesList.vue";
import _debounce from "lodash/debounce";
import { ref, unref } from "vue";

export default defineComponent({
  components: {
    SearchForm,
    GamesList,
  },
  setup() {
    const { data } = useAsyncData("games", () => $fetch("/api/games"));
    const loading = ref(false);

    const search = _debounce(async function (inputData) {
      try {
        data.value = await $fetch("/api/games", {
          method: "GET",
          params: {
            searchValue: unref(inputData),
          },
        });
      } catch (error) {
        console.error(error);
      } finally {
        loading.value = false;
      }
    }, 170);

    const isLoading = () => {
      loading.value = true;
    };

    return { data, search, isLoading, loading };
  },
});
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.main__wrapper {
    min-height: 100vh;
    padding: 32px;
    background: linear-gradient(90deg, #002F23 0%, #004736 19.54%, #004736 80.38%, #002F23 100%, #002F23 100%);
}

.main__content {
    margin-top: 50px;
}
</style>
