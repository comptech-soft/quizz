<template>
    <div id="quiz-detail-container" v-if="ready && ! loading">

        <vue-response-report
            v-if="0 < responses.length"
            :record="record"
            :responses="responses"
            :solving="solving"
        >
        </vue-response-report>

        <!-- Asta se vede inainte de a apasa start -->
        <div 
            v-if="! loading && ! started && (record != null) && (responses.length == 0)" 
            class="panel panel-default"
        >
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
                <button class="btn btn-success" @click="start">
                    Start
                </button>
            </div>
        </div>

        <!-- Asta se vede dupa ce am dat start -->
        <div 
            v-if="! loading && started && (responses.length == 0)" 
            class="panel panel-default"
        >
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
                        <div class="btn-group pull-left">
                            <button
                                class="btn btn-success"
                                @click="restart"
                            >
                                Restart
                            </button>
                        </div>

                        <div class="btn-group pull-right">
                            <!-- Previous -->
                            <button 
                                v-if="current > 0"
                                type="button" 
                                class="btn btn-primary"
                                :disabled="current == 0"
                                style="margin-right:4px"
                                @click="prev"
                            >
                                <i class="fa fa-fw fa-chevron-left"></i>
                                Previous
                            </button>
                            <!-- Next -->
                            <button
                                v-if="current < this.questions.length - 1" 
                                type="button" 
                                class="btn btn-primary"
                                @click="next"
                            >
                                Next
                                <i class="fa fa-fw fa-chevron-right"></i>
                            </button>
                            <!-- Finish -->
                            <button
                                v-if="current == this.questions.length - 1" 
                                type="button" 
                                class="btn btn-success"
                                @click="finish"
                            >
                                <i class="fa fa-fw fa-check-square"></i>
                                Finish
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
    import vueResponseReport from './_ResponseReport'

    export default 
    {

        components:
        {
            'vue-play-quiz': vuePlayQuiz,
            'vue-response-report': vueResponseReport
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

                sending_responses: false,
                responses: [],
                /*
                | record from table QUIZ_SOLVING
                */
                solving: null,
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

            start()
            {
                let vm = this;
                Requests.post('quiz-detail/start', {
                    user_id: this.user.id,
                    quiz_id: this.record.id,
                })
                    .then(r => {
                        vm.solving = r.data;
                        vm.started = true;
                    })
            },

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

            finish()
            {
                let vm = this;
                $.confirm({
                    title: 'Confirm finish',
                    content: 'Are you sure you want to finish?<br/>Your responses will be send!',
                    buttons: {
                        finish: {
                            text: 'Finish',
                            btnClass: 'btn-blue',
                            action: function(){
                                vm.sendResponses();
                            }
                        },
                        cancel: {
                            text: 'Cancel',
                        },
                    }
                });
            },

            restart()
            {
                let vm = this;
                $.confirm({
                    title: 'Confirm restart',
                    content: 'Are you sure you want to restart?<br/>You will lose any responses!',
                    buttons: {
                        restart: {
                            text: 'Restart',
                            btnClass: 'btn-blue',
                            action: function(){
                                vm.current = 0;
                                vm.user_answers = [];
                                vm.prepareUserAnswers();
                                vm.timer.reset();
                                vm.$forceUpdate();
                            }
                        },
                        cancel: {
                            text: 'Cancel',
                        },
                    }
                });
                
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
                        $.scrollTo('#quiz-detail-container', 500);
                    }
                }, 10)
            },

            sendResponses()
            {
                let vm = this
                vm.sending_responses = true;
                Requests.post('quiz-detail/sending-responses', {
                    solving_id: this.solving.id,
                    quiz_id: this.record.id,
                    user_answers: this.user_answers
                })
                    .then(r => {
                        vm.responses = r.data.responses;
                        vm.solving = r.data.solving;
                    })
            },

            getRecord()
            {
                let vm = this;
                vm.loading = true;
                Requests.post('quiz-detail/get-record', {id: this.id})
                    .then(r => {


                        vm.record = r.data;
                        vm.prepareUserAnswers();
                        
                        vm.timer = new Timer();
                        vm.timer.start({
                            countdown: true, 
                            startValues: {
                                seconds: vm.record.time * 60 
                            }
                        });
                        vm.timer.addEventListener('secondsUpdated', function(e) {
                            vm.clock = vm.timer.getTimeValues().toString();
                        });
                        vm.timer.addEventListener('reset', function(e) {
                            vm.clock = vm.timer.getTimeValues().toString();
                        });
                        vm.timer.addEventListener('targetAchieved', function (e) {
                            alert('KABOOM!!');
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