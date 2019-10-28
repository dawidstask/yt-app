<template>
  <iframe
    type="text/html"
    :width="width"
    :height="height"
    :src="src"
  ></iframe>
</template>

<script>
export default {
  name: 'YoutubeVideo',
  props: {
    id: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 640,
    },
    height: {
      type: Number,
      default: 390,
    },
  },
  data() {
    return {
      src: `http://www.youtube.com/embed/${this.id}?enablejsapi=1`,
    };
  },
};
</script>
<style lang="stylus" scoped>
  iframe
    border: 0
</style>
