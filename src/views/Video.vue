<template>
  <div>
    <p>
      <YoutubeVideo :id="this.$route.params.id" />
    </p>
    <button type="button" @click="goBack">back</button>
<!--    <Pagination />-->
  </div>
</template>

<script>
// import Pagination from '@/components/Pagination.vue';
import YoutubeVideo from '@/components/YoutubeVideo.vue';

export default {
  name: 'Video',
  components: {
    // Pagination,
    YoutubeVideo,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
</style>
