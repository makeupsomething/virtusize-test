import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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

export default new Vuex.Store({
    state,
    mutations,
})
