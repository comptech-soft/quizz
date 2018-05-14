/*
| Crearea unui quiz
*/
import vueQuizCreate from './~components/QuizCreate'

new window.Vue({

    el: '#quiz-create',

    components:
    {
        'vue-quiz-create': vueQuizCreate
    },    

    name: 'admin-quiz-create',
})