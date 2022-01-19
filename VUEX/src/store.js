import { createStore } from 'vuex';

const counterModule = {
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      setTimeout(function () {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      context.commit('increase', payload);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 4;
    },
    normalizeCounter(state) {
      const finalyy = state.counter;
      if (finalyy < 0) {
        return 0;
      }
      if (finalyy > 100) {
        return 100;
      }
      return finalyy;
    },
  },
};

const store = createStore({
  modules: {
    number: counterModule,
  },
  state() {
    return {
      isActive: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isActive = payload.isAuth;
    },
  },
  actions: {
    login(context) {
      context.commit('setAuth', {
        isAuth: true,
      });
    },
    logout(context) {
      context.commit('setAuth', {
        isAuth: false,
      });
    },
  },
  getters: {
    isAuth(state) {
      return state.isActive;
    },
  },
});

export default store;
