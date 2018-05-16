import vueQuizList from './~components/QuizList'

new window.Vue({

    el: '#quiz-list',

    components:
    {
        'vue-quiz-list': vueQuizList
    },    

    name: 'admin-quiz-list',
})