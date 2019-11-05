<template>
  <div class="home">
    <Header/>
    <SearchForm />
    <SearchResults
      v-if="videos.length"
      :videos="videos"
    />
    <Pagination
      v-if="videos.length"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from '@/components/Header.vue';
import SearchForm from '@/components/SearchForm.vue';
import SearchResults from '@/components/SearchResults.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Home',
  components: {
    Header,
    SearchForm,
    SearchResults,
    Pagination,
  },
  computed: {
    ...mapGetters({
      videos: 'videos',
    }),
  },
  mounted() {
    this.$store.dispatch('loadVideos');
  },
  methods: {
  },
};
</script>
