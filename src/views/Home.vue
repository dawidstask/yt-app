<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->

    <Header/>
    <SearchForm />
    <SearchResults
      v-if="videos.length"
      :videos="videos"
    />
<!--    <Pagination-->
<!--      v-if="videos.length"-->
<!--      :prevPageToken="prevPageToken"-->
<!--      :nextPageToken="nextPageToken"-->
<!--      @prev-page="prevPage"-->
<!--      @next-page="nextPage"-->
<!--    />-->
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
      apiUrl: 'apiUrl',
      videos: 'videos',
      // prevPageToken: 'prevPageToken',
      // nextPageToken: 'nextPageToken',
    }),
  },
  mounted() {
    this.$store.dispatch('loadVideos');
  },
  methods: {
    // prevPage() {
    //   const {
    //     baseUrl, part, type, order, maxResults, q, key, prevPageToken,
    //   } = this.api;
    //   const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=
    //   ${maxResults}&key=${key}&pageToken=${prevPageToken}`;
    //   this.getData(apiUrl);
    // },
    // nextPage() {
    // const {
    //   baseUrl, part, type, order, maxResults, q, key, nextPageToken,
    // } = this.api;
    // const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=
    // ${maxResults}&key=${key}&pageToken=${nextPageToken}`;
    // this.getData(apiUrl);
    // },
  },
};
</script>
