<template>
  <div>
    <button
      @click="prevPage"
      class="prev"
      :class="{ disabled: prevPageToken === undefined }"
      type="button"
    >
      Previous
    </button>
    <button
      @click="nextPage"
      class="next"
      :class="{ disabled: nextPageToken === undefined }"
      type="button"
    >
      Next
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Pagination',
  computed: {
    ...mapGetters({
      prevPageToken: 'prevPageToken',
      nextPageToken: 'nextPageToken',
    }),
  },
  methods: {
    prevPage() {
      this.$store.dispatch('loadPrevVideos');
    },
    nextPage() {
      this.$store.dispatch('loadNextVideos');
    },
  },
};
</script>

<style lang="stylus" scoped>
  div
    margin-top: 1em
  .disabled
    display: none
  button
    height: 25px
    width: 70px
    margin: 0 5px
    color: white
    border-radius: 3px
    cursor: pointer
    &.next
      background-color: #27AE5F
      border: none
      border-bottom: 3px solid #007E41
    &.prev
      background-color: #27AE5F
      border: none
      border-bottom: 3px solid #007E41
</style>
