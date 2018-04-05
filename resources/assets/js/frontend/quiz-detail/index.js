window.Timer = require('easytimer.js');

import vueQuizDetail from './~components/QuizDetail'

new window.Vue({

    el: '#quiz-detail',

    components:
    {
        'vue-quiz-detail': vueQuizDetail
    },    

    name: 'frontend-quiz-detail',
})