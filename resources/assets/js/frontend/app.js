import store from './store/Store'

window.Quizz = new Vue({

    store,

    created()
    {
        this.$store.commit('setConfig');
    },

})