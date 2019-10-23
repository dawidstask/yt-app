<template>
  <form>
    <input
      v-model="searchString"
      @keydown.enter.prevent="parseSearchString"
      type="text"
      placeholder="Search ..."
      autofocus
    >

    <div>
      <button
        @click="parseSearchString"
        type="button"
      >
        Search
      </button>
      <button @click="reset">Reset</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SearchForm',
  data() {
    return {
      searchString: '',
    };
  },
  methods: {
    parseSearchString() {
      const searchParams = this.searchString.trim().split(/\s+/);
      this.$emit('search', searchParams);
    },
    reset() {
      this.searchString = '';
      this.parseSearchString();
    },
  },
};
</script>

<style scoped>
</style>
