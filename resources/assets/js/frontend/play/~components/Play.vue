<template>
	
    <div 
        id="get-player-infos" 
        v-if="gettting_player_infos"
    >
        <div class="panel panel-default">    
            <div class="panel-heading">
                <h4>
                    Contestant infos
                </h4>
            </div>

            <div class="panel-body">
                
                <div class="row">
                    <!-- Name -->
                    <div class="col-xs-12 col-sm-5">
                        <vue-textbox
                            field="first_name"
                            placeholder="Name"
                            label="Name"
                            v-model="player.first_name"
                            :errors="errors"
                        >
                        </vue-textbox>
                    </div>

                    <!-- Surname -->
                    <div class="col-xs-12 col-sm-5">
                        <vue-textbox
                            field="last_name"
                            placeholder="Surname"
                            label="Surname"
                            v-model="player.last_name"
                            :errors="errors"
                        >
                        </vue-textbox>
                    </div>

                    <!-- class -->
                    <div class="col-xs-12 col-sm-2">
                        <vue-textbox
                            field="class"
                            placeholder="Class"
                            label="Class"
                            v-model="player.class"
                            :errors="errors"
                        >
                        </vue-textbox>
                    </div>

                </div>

                <div class="row">
                
                    <!-- Email -->
                    <div class="col-xs-12 col-sm-12">
                        <vue-textbox
                            field="email"
                            placeholder="Email"
                            label="Email"
                            v-model="player.email"
                            :errors="errors"
                        >
                        </vue-textbox>
                    </div>

                </div>
            </div>

            <div class="panel-footer">
                <button
                    class="btn btn-primary"
                    @click="onClickStartContest"
                >
                    Start contest
                </button>
            </div>
        </div>
    </div>

    <div
        v-else
    >

        <vue-response-report
            v-if="! loading && (0 < responses.length)"
            :record="record"
            :responses="responses"
            :solving="solving"
        >
        </vue-response-report>

        <div 
            v-if="! loading && (responses.length == 0)" 
            class="panel panel-default"
        >
            <!-- Heading -->
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-8">
                        <h3 class="panel-title">
                            {{ user.first_name }}, {{ user.last_name }}, {{ user.class }}, {{ user.email }}
                        </h3>
                    </div>
                    <div class="col-xs-4 text-right">
                        <i class="fa fa-fw fa-clock-o"></i>
                        {{ clock }}
                    </div>
                </div>
            </div>

            <!-- Body -->
            <div class="panel-body">
                <vue-play-quiz
                    :record="record"
                    :user_answers="user_answers"
                    :current="current"
                    @user-answer="onUserAnswer"
                >
                </vue-play-quiz>
            </div>

            <!-- Footer -->
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
</template>

<script>

    import vuePlayQuiz from './../../quiz-detail/~components/_PlayQuiz'
    import vueResponseReport from './../../quiz-detail/~components/_ResponseReport'

    import veeValidation from './../../../boot/modules/validation/Validation'

    export default 
    {

        components:
        {
            'vue-play-quiz': vuePlayQuiz,
            'vue-response-report': vueResponseReport
        },

    	props:
    	{
    		
    	},

        computed:
        {
            record()
            {
                return {
                    questions: this.questions,
                    total_available_points: _.sumBy(this.questions, function(o) { return o.points; }),
                }
            },

            solving()
            {
                return {
                    total_real_points: _.sumBy(this.responses, function(o) { return o.points; }),
                }
            }
        },

        data()
        {
            return {
                gettting_player_infos: true,
                loading: false,

                errors: null,

                player: {
                    first_name: 'Test name',
                    last_name: 'Test surname ',
                    class: '7',
                    email: 'aaa@test.ro',
                    password: Math.random().toString(36).substring(10),
                },

                user: null,
                questions: null,
                clock: '00:00:00',
                responses: [],
                user_answers: [],
                current: 0,
            };
        },

        methods:
        {
            onClickStartContest()
            {
                let validator = new veeValidation({
                    first_name: 'required',
                    last_name: 'required',
                    class: 'required',
                    email: 'required|email|unique:users,email',
                });

                validator.validate(this.player).then( valid => {
                    if(valid)
                    {
                        this.startContest();
                    }
                    else
                    {
                        this.errors = validator.getErrors();
                    }
                })
            },

            prepareUserAnswers()
            {
                let vm = this
                _.each(this.questions, question => {

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

            startContest()
            {
                this.loading = true;
                Requests.post('/play-quiz/start-contest', {player: this.player})
                    .then( r => {
                        this.user = r.data.user;
                        this.questions = r.data.questions;
                        this.prepareUserAnswers();
                        this.gettting_player_infos = false;
                        this.loading = false;
                    })
                ;
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

            next()
            {
                if( this.current < this.questions.length - 1)
                {
                    this.current++;
                }
            },

            prev()
            {
                if(this.current > 0)
                {
                    this.current--;
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

            sendResponses()
            {
                let vm = this
                vm.sending_responses = true;
                Requests.post('play-quiz/send-responses', {
                    user: this.user,
                    user_answers: this.user_answers
                })
                    .then(r => {
                        console.log(r);
                        vm.responses = r.data.responses;
                        // vm.solving = r.data.solving;
                    })
            },
        },

        name: 'play'
    }

</script>