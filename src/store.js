import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videos: [],
    searchValue: '',
    api: {
      baseUrl: process.env.VUE_APP_YOUTUBE_BASE_URL,
      part: 'snippet',
      type: 'video',
      order: 'viewCount',
      maxResults: 10,
      q: '',
      key: process.env.VUE_APP_YOUTUBE_API_KEY,
      prevPageToken: '',
      nextPageToken: '',
    },
  },
  getters: {
    videos: state => state.videos,
    searchValue: state => state.searchValue,
    query: state => state.api.q,
    prevPageToken: state => state.api.prevPageToken,
    nextPageToken: state => state.api.nextPageToken,
    apiUrl: (state) => {
      const apiUrl = `${state.api.baseUrl}
        part=${state.api.part}
        &type=${state.api.type}
        &order=${state.api.order}
        &maxResults=${state.api.maxResults}
        &key=${state.api.key}`;

      return apiUrl.replace(/\s/g, '');
    },
    apiQueryUrl: (state) => {
      const apiUrl = `${state.api.baseUrl}
        part=${state.api.part}
        &type=${state.api.type}
        &order=${state.api.order}
        &q=${state.api.q}
        &maxResults=${state.api.maxResults}
        &key=${state.api.key}`;

      return apiUrl.replace(/\s/g, '');
    },
    apiPrevTokenUrl: (state) => {
      const apiUrl = `${state.api.baseUrl}
        part=${state.api.part}
        &type=${state.api.type}
        &order=${state.api.order}
        &q=${state.api.q}
        &maxResults=${state.api.maxResults}
        &key=${state.api.key}
        &pageToken=${state.api.prevPageToken}`;

      return apiUrl.replace(/\s/g, '');
    },
    apiNextTokenUrl: (state) => {
      const apiUrl = `${state.api.baseUrl}
        part=${state.api.part}
        &type=${state.api.type}
        &order=${state.api.order}
        &q=${state.api.q}
        &maxResults=${state.api.maxResults}
        &key=${state.api.key}
        &pageToken=${state.api.nextPageToken}`;

      return apiUrl.replace(/\s/g, '');
    },
  },
  mutations: {
    SET_VIDEOS(state, videos) {
      state.videos = videos;
    },
    SET_PREV_PAGE_TOKEN(state, token) {
      state.api.prevPageToken = token;
    },
    SET_NEXT_PAGE_TOKEN(state, token) {
      state.api.nextPageToken = token;
    },
    SET_QUERY(state, q) {
      state.api.q = q;
    },
  },
  actions: {
    loadVideos({ commit }, query) {
      const url = query ? this.getters.apiQueryUrl : this.getters.apiUrl;
      axios
        .get(url)
        .then(r => r.data)
        .then((items) => {
          commit('SET_VIDEOS', items.items);
          commit('SET_PREV_PAGE_TOKEN', items.prevPageToken);
          commit('SET_NEXT_PAGE_TOKEN', items.nextPageToken);
        })
        .catch(error => console.log(error.response));
    },
    loadPrevVideos({ commit }) {
      const url = this.getters.apiPrevTokenUrl;
      axios
        .get(url)
        .then(r => r.data)
        .then((items) => {
          commit('SET_VIDEOS', items.items);
          commit('SET_PREV_PAGE_TOKEN', items.prevPageToken);
          commit('SET_NEXT_PAGE_TOKEN', items.nextPageToken);
        })
        .catch(error => console.log(error.response));
    },
    loadNextVideos({ commit }) {
      const url = this.getters.apiNextTokenUrl;
      axios
        .get(url)
        .then(r => r.data)
        .then((items) => {
          commit('SET_VIDEOS', items.items);
          commit('SET_PREV_PAGE_TOKEN', items.prevPageToken);
          commit('SET_NEXT_PAGE_TOKEN', items.nextPageToken);
        })
        .catch(error => console.log(error.response));
    },
  },
});
