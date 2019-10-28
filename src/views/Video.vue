<template>
  <div>
    <p>
      <YoutubeVideo :id="this.$route.params.id" />
    </p>
    <button type="button" @click="goBack">back</button>
  </div>
</template>

<script>
import YoutubeVideo from '@/components/YoutubeVideo.vue';

export default {
  name: 'Video',
  components: {
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
