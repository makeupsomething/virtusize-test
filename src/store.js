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

const actions = {
    getUserProfilePicture(email) {
        //get the image here
    },
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
})
