import vueWelcome from './~components/Welcome'
import vueRanking from './~components/Ranking'

new window.Vue({

    el: '#head',
    components:
    {
        'vue-welcome': vueWelcome
    },
    name: 'frontend-welcome-entry-point',

})


new window.Vue({

    el: '#ranking',
    components:
    {
        'vue-ranking': vueRanking
    },
    name: 'frontend-ranking-entry-point',

})