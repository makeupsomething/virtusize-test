const state = {
    error: null,
    user: null,
    profilePicutre: null,
}

const mutations = {
    setUser(state, user) {
        state.user = user
    },
}

export default {
    state,
    mutations,
}

//export default new Vuex.Store({})
