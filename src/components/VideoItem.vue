<template>
  <div>
    <router-link :to="{ name: 'video', params: { id: video.id.videoId }}">
      <p>{{ video.snippet.title }}</p>
      <img :src="video.snippet.thumbnails.medium.url" :alt="video.snippet.title">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'VideoItem',
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
  div
    height: 100%
    display: flex
    flex-direction: column
    justify-content space-between
  p
    font-size: 1em
    font-weight: bold
    margin: 0
  img
    align-self: center
</style>
