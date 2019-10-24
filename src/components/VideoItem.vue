<template>
  <div>
    <p>{{ video.snippet.title }}</p>
    <img :src="video.snippet.thumbnails.medium.url" :alt="video.snippet.title">
  </div>
</template>

<script>
export default {
  name: 'VideoItem',
  props: ['video'],
};
</script>

<style lang="stylus" scoped>
  div
    height: 100%
  p
    font-size: 1em
    font-weight: bold
    margin: 0
</style>
