<template>
    <div id="quiz-detail-container" v-if="ready && ! loading">

        <!-- Asta se vede inainte de a apasa start -->
        <div v-if="! loading && !started" class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ record.title }}
                </h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-xs-12 col-sm-6">
                        <p v-html="record.description">
                        </p>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <img :src="'/' + record.image_url" class="img-responsive" />
                    </div>
                </div>
            </div>
            <div class="panel-footer">
                <button class="btn btn-primary" @click="started=true">
                    Start
                </button>
            </div>
        </div>

        <!-- Asta se vede dupa ce am dat start -->
        <div v-if="! loading && started" class="panel panel-default">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-8">
                        <h3 class="panel-title">
                            {{ record.title }}
                        </h3>
                    </div>
                    <div class="col-xs-4 text-right">
                        <i class="fa fa-fw fa-clock-o"></i>
                        {{ clock }}
                    </div>
                </div>
            </div>

            <div class="panel-body">

                <vue-play-quiz
                    :record="record"
                    :user_answers="user_answers"
                    :current="current"
                    @user-answer="onUserAnswer"
                >
                </vue-play-quiz>

                <div v-if="0" style="background-color: blue; color: yellow">
                    <div v-for="answer in user_answers" style="border-bottom:1px solid #fff">
                        {{answer}}
                    </div>
                </div>
            </div>

            <div class="panel-footer" id="questions-actions">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="btn-group pull-right">
                            <button 
                                v-if="current > 0"
                                type="button" 
                                class="btn btn-primary"
                                :disabled="current == 0"
                                style="margin-right:4px"
                                @click="prev"
                            >
                                <i class="fa fa-fw fa-chevron-left"></i>
                                Previos
                            </button>
                            <button 
                                type="button" 
                                class="btn btn-primary"
                                @click="next"
                            >
                                Next
                                <i class="fa fa-fw fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>                
                </div>
            </div>
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

            questions()
            {
                return this.record.questions;
            },
        },

        data()
        {
            return {
                record: null,
                loading: false,
                started: false,
                timer: null,
                clock: '00:00:00',
                current: 0,
                user_answers: [],
            };
        },

        watch:
        {
            'current': function(newCurrent, oldCurrent)
            {
                this.scroll();
            }
        },

        methods:
        {

            prev()
            {
                if(this.current > 0)
                {
                    this.current--;
                }
            },

            next()
            {
                if( this.current < this.questions.length - 1)
                {
                    this.current++;
                }
            },

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
                        case 'text':
                        case 'radio':
                            answer = '';
                            break;
                        case 'check':
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

            scroll()
            {
                let i = setInterval(() => {
                    if( $('#quiz-detail-container').length == 1 )
                    {
                        clearInterval(i);
                        console.log('Scrollling...');
                        $.scrollTo('#quiz-detail-container', 500);
                    }
                }, 10)
            },

            getRecord()
            {
                let vm = this;
                vm.loading = true;
                Requests.post('quiz-detail/get-record', {id: this.id})
                    .then( r => {


                        vm.record = r.data;
                        vm.prepareUserAnswers();
                        
                        vm.timer = new Timer();
                        vm.timer.start();
                        vm.timer.addEventListener('secondsUpdated', function(e) {
                            vm.clock = vm.timer.getTimeValues().toString();
                        });

                        vm.loading = false;
                        vm.scroll();
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