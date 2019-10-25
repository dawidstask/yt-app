<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <Header/>
    <SearchForm v-on:search="search"/>
    <SearchResults
      v-if="videos.length > 0"
      :videos="videos"
    />
    <Pagination
      v-if="videos.length > 0"
      :prevPageToken="api.prevPageToken"
      :nextPageToken="api.nextPageToken"
      @prev-page="prevPage"
      @next-page="nextPage"
    />
  </div>
</template>

<script>
import axios from 'axios';
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
  data() {
    return {
      videos: [],
      searchValue: '',
      api: {
        baseUrl: 'https://www.googleapis.com/youtube/v3/search?',
        part: 'snippet',
        type: 'video',
        order: 'viewCount',
        maxResults: 10,
        q: '',
        key: 'AIzaSyC2Wa9Q5QCOHiL-aZ5yBn6CNVorYkJzXFg',
        prevPageToken: '',
        nextPageToken: '',
      },
    };
  },
  methods: {
    search(searchParams) {
      this.api.q = searchParams.join('+');
      const {
        baseUrl, part, type, order, maxResults, q, key,
      } = this.api;
      const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}`;
      this.getData(apiUrl);
    },
    prevPage() {
      const {
        baseUrl, part, type, order, maxResults, q, key, prevPageToken,
      } = this.api;
      const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}&pageToken=${prevPageToken}`;
      this.getData(apiUrl);
    },
    nextPage() {
      const {
        baseUrl, part, type, order, maxResults, q, key, nextPageToken,
      } = this.api;
      const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}&pageToken=${nextPageToken}`;
      this.getData(apiUrl);
    },
    getData(apiUrl) {
      axios
        .get(apiUrl)
        .then((res) => {
          this.videos = res.data.items;
          this.api.prevPageToken = res.data.prevPageToken;
          this.api.nextPageToken = res.data.nextPageToken;
        })
        .catch(error => console.log(error));
    },
  },
};
</script>
