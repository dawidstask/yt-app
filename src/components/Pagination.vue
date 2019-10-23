<template>
  <nav>
    <ul class="pagination justify-content-end">
      <li class="page-item" :class="{ disabled: prevPageToken === undefined }">
        <a @click="prevPage" class="page-link" href="#">Previous</a>
      </li>
      <li class="page-item" :class="{ disabled: nextPageToken === undefined }">
        <a @click="nextPage" class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['prevPageToken', 'nextPageToken'],
  methods: {
    prevPage() {
      this.$emit('prev-page');
    },
    nextPage() {
      this.$emit('next-page');
    },
  },
};
</script>

<style scoped>
</style>
