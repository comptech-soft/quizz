import store from './store/Store'

window.Quizz = new Vue({
    store,
    created()
    {
        this.$store.commit('setConfig');
    },
})

// Navbar
import vueNavbar from './~components/navbar/Navbar'

new window.Vue({

    el: '#navbar-app',
    components:
    {
        'vue-navbar': vueNavbar
    },
    name: 'quizz-navbar',

})