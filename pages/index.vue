<template>
  <section>
    <search-form @search="search" @loading="isLoading" />
    <div>
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

<style scoped></style>
