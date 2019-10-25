<template>
  <div>
    <span>video</span>
    <button type="button" @click="goBack">back</button>
  </div>
</template>

<script>
export default {
  name: 'Video',
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>

</style>
