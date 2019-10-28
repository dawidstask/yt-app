<template>
  <div class="items">
    <div
      v-for="video in videos"
      :key="video.id.videoId">
      <VideoItem :video="video" />
    </div>
  </div>
</template>

<script>
import VideoItem from './VideoItem.vue';

export default {
  name: 'SearchResults',
  props: {
    videos: {
      type: Object,
      required: true,
    },
  },
  components: {
    VideoItem,
  },
  data() {
    return {
      title: 'Search Results',
    };
  },
};
</script>
<style lang="stylus" scoped>
  .items
    margin-top: 2em
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))
    justify-items: center;
    grid-template-rows: auto;
    grid-gap: 3em
  .items > div
    height: 100%
    width: 320px
</style>
