import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import composeUrl from '@/utils/Api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videos: [],
    searchValue: '',
    prevPageToken: '',
    nextPageToken: '',
  },
  getters: {
    videos: state => state.videos,
    searchValue: state => state.searchValue,
    prevPageToken: state => state.prevPageToken,
    nextPageToken: state => state.nextPageToken,
  },
  mutations: {
    SET_VIDEOS(state, videos) {
      state.videos = videos;
    },
    SET_PREV_PAGE_TOKEN(state, token) {
      state.prevPageToken = token;
    },
    SET_NEXT_PAGE_TOKEN(state, token) {
      state.nextPageToken = token;
    },
    SET_SEARCH_VALUE(state, value) {
      state.searchValue = value;
    },
  },
  actions: {
    loadVideos({ commit }, config) {
      const url = composeUrl({
        ...config,
        q: this.state.searchValue,
      });
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
