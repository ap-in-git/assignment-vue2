const userState = {
  namespaced: true,
  state: {
    isLoggedIn: false,
    dialog: false,
    userDetail: {
      name: "Brian Kim",
    },
  },
  actions: {},
  mutations: {
    setLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
    setLoginDialog(state, payload) {
      state.dialog = payload;
    },
  },
};

export default userState;
