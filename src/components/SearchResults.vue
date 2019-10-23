<template>
  <div>
    <div class="items">
      <div
        v-for="video in videos"
        :key="video.id.videoId">
        <VideoItem :video="video" />
      </div>
    </div>
  </div>
</template>

<script>
import VideoItem from './VideoItem.vue';

export default {
  name: 'SearchResults',
  components: {
    VideoItem,
  },
  data() {
    return {
      title: 'Search Results',
    };
  },
  props: ['videos'],
};
</script>
<style lang="stylus" scoped>
  .items
    display: grid
    align-items: center
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr))
    grid-gap: 0.5em
  .items > div
    height: 100%
</style>
