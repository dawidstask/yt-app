<template>
  <div>
    <span @click="goBack">&#8592; back</span>
    <p>
      <YoutubeVideo :id="this.$route.params.id" />
    </p>
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

<style lang="stylus" scoped>
  div
    display: flex
    flex-direction: column
    justify-content: center
  span
    cursor: pointer
</style>
