import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    swiperList: [],
    iconList: [],
    recommendList: [],
    weekendList: [],
    hotCities: [],
    cities: [],
    na: '',
    gcity: '杭州',
    vdeta: {},
    hotList: []
  },
  mutations: {
    wrState (state, params) {
      state.swiperList = params.data.swiperList
      state.iconList = params.data.iconList
      state.recommendList = params.data.recommendList
      state.weekendList = params.data.weekendList
      state.gcity = localStorage.getItem('city')
    },
    wrStates (state, params) {
      state.hotCities = params.data.hotCities
      state.cities = params.data.cities
    },
    wrsw (state, params) {
      state.na = params
    },
    wrcity (state, params) {
      state.gcity = params
      localStorage.setItem('city', state.gcity)
    },
    wrDeta (state, params) {
      state.vdeta = params.data
    },
    wrHost (state, params) {
      state.hotList = params.data.hotList
    }
  },
  actions: {
    getData (context) {
      Axios.get('index.json')
        .then((data) => {
          context.commit('wrState', data.data)
        })
    },
    getHost (context) {
      Axios.get('hotList.json')
        .then((data) => {
          context.commit('wrHost', data.data)
        })
    },
    getdetail (context) {
      Axios.get('detail.json')
        .then((data) => {
          context.commit('wrDeta', data.data)
        })
    },
    getCity (context) {
      Axios.get('city.json')
        .then((data) => {
          context.commit('wrStates', data.data)
        })
    },
    changsw (context, swh) {
      context.commit('wrsw', swh)
    },
    chcity (context, city) {
      context.commit('wrcity', city)
    }
  }
})
export default store
