const userState = {
    namespaced: true,
    state: {
        isLoggedIn: false,
        userDetail:{
            name:"Brian kim"
        }
    },
    actions: {

    },
    mutations: {
        setLoggedIn(state, payload) {
            state.isLoggedIn = payload
        },
    },
};

export default userState;
