<template>
    <div v-if="ready">

        <div v-if="! loading && !started">
            <section class="maincontent">
                <h3>{{ record.title }}</h3>
                <div class="row">
                    <div class="col-xs-12 col-sm-6">
                        <p v-html="record.description">
                        </p>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <img :src="'/' + record.image_url" class="img-responsive" />
                       
                    </div>
                </div>
            </section>
    	   
            <section>
                <button class="btn btn-primary" @click="started=true">
                    Start
                </button>
            </section>
        </div>

        <div v-if="! loading && started">
            <section class="maincontent">
                <h3>{{ record.title }}</h3>
            </section>

            <div style="background-color: blue; color: yellow">
                <div v-for="answer in user_answers" style="border-bottom:1px solid #fff">
                    {{answer}}
                </div>
            </div>

            <section>
                <vue-play-quiz
                    :record="record"
                    :user_answers="user_answers"
                    @user-answer="onUserAnswer"
                >
                </vue-play-quiz>
            </section>
        </div>
    </div>
    <i v-else class="fa fa-spinner fa-spin"></i>
</template>

<script>

    import vuePlayQuiz from './_PlayQuiz'

    export default 
    {

        components:
        {
            'vue-play-quiz': vuePlayQuiz
        },

    	props:
    	{
    		id: {required: true}
    	},

        computed:
        {
            ready()
            {
                return Quizz.$store.getters.ready
            },

            user()
            {
                return Quizz.$store.getters.user
            },
        },

        data()
        {
            return {
                record: null,
                loading: false,
                started: false,
                user_answers: [],
            };
        },

        methods:
        {

            onUserAnswer(e)
            {
                for(let i = 0; i < this.user_answers.length; i++)
                {
                    if( this.user_answers[i].question_id == e.question_id )
                    {
                        this.user_answers[i] = {
                            question_id: e.question_id,
                            answer: e.answer
                        }
                        break;
                    }
                }
                this.$forceUpdate();
            },

            prepareUserAnswers()
            {
                let vm = this
                _.each(this.record.questions, question => {

                    let answer = null;
                    switch(question.type)
                    {
                        case 'radio':
                            answer = '';
                            break;
                        case 'check':
                            answer = [];
                            break;
                        case 'match':
                            answer = [];
                            break;
                    }

                    vm.user_answers.push({
                        question_id: question.id,
                        answer: answer
                    })
                })
            },

            getRecord()
            {
                let vm = this;
                vm.loading = true;
                Requests.post('quiz-detail/get-record', {id: this.id})
                    .then( r => {

                        vm.record = r.data;
                        vm.prepareUserAnswers();
                        vm.loading = false;

                    })
            }
        },

        mounted()
        {
            this.getRecord();
        },

        name: 'quiz-detail'
    }

</script>