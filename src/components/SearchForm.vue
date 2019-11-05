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
        @click="reset"
        type="button"
        class="reset"
      >
        Reset
      </button>
      <button
        @click="parseSearchString"
        type="button"
        class="search"
      >
        Search
      </button>
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
      const searchValue = this.searchString.trim().split(/\s+/);
      this.$store.commit('SET_SEARCH_VALUE', searchValue);
      this.$store.dispatch('loadVideos', { q: searchValue });
    },
    reset() {
      this.searchString = '';
      this.parseSearchString();
    },
  },
};
</script>

<style lang="stylus" scoped>
  input
    width: 300px
    height: 30px
    margin: 10px
    border: 1px solid lightgrey
    border-radius: 3px
    padding-left: 10px
  button
    height: 25px
    width: 70px
    margin: 0 5px
    color: white
    border-radius: 3px
    cursor: pointer
    &.search
      background-color: #3CBCE1
      border: none
      border-bottom: 3px solid #15A7D0
    &.reset
      background-color: #F2664F
      border: none
      border-bottom: 3px solid #DD5441
  input, button
    &:focus
      outline: none
</style>
